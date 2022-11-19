import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { ShopGuard } from './shop.guard';
import { loadBusiness } from 'src/app/business/data-access/business.actions';
import { selectBusinessEntity } from 'src/app/business/data-access/business.selectors';

@Injectable({
  providedIn: 'root',
})
export class OwnedShopGuard extends ShopGuard implements CanActivate {
  constructor(private _injector: Injector, private _authService: AuthenticationService) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userId = this._authService.getUserId();

    const shop$ = this.getSelectedShop(route.paramMap).pipe();
    return new Observable<boolean>((observer) => {
      shop$.subscribe((shop) => {
        this.store.dispatch(loadBusiness({ id: shop?.details.businessId! }));

        const isUserShopOwner = this.store
          .select(selectBusinessEntity(shop?.details.businessId!))
          .pipe(
            tap((business) => console.log(business)),
            map((business) => business !== undefined && business.ownerId === userId)
          );

        isUserShopOwner.subscribe((shop) => {
          observer.next(shop);
        });
      });
    });

    //   const userOwnedShops = this.store.select(selectBusinessmanBusinesses(userId));

    //   return userOwnedShops.pipe(
    //     mergeMap((ownedShops) =>
    //       shop$.pipe(
    //         map((selectedShop) => ownedShops.includes(selectedShop)),
    //         tap((value) => {
    //           if (!value) {
    //             this.redirectToShopsPage();
    //           }
    //         })
    //       )
    //     )
    //   );
  }
}
