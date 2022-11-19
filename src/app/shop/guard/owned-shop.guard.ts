import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map } from 'rxjs';

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
          .pipe(map((business) => business !== undefined && business.ownerId === userId));

        isUserShopOwner.subscribe((shop) => {
          observer.next(shop);
        });
      });
    });
  }
}
