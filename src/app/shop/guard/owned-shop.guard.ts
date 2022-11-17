import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, mergeMap, tap } from 'rxjs';

import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { ShopGuard } from './shop.guard';
import { selectBusinessmanBusinesses } from 'src/app/businessman/data-access/businessman.selectors';

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
    const shopId = this.getSelectedShop(route.paramMap).pipe(
      map((shop) => (shop === undefined ? '' : shop.id))
    );

    const userId = this._authService.getUserId();
    const userOwnedShops = this.store.select(selectBusinessmanBusinesses(userId));

    return userOwnedShops.pipe(
      mergeMap((ownedShops) =>
        shopId.pipe(
          map((selectedShop) => ownedShops.includes(selectedShop)),
          tap((value) => {
            if (!value) {
              this.redirectToShopsPage();
            }
          })
        )
      )
    );
  }
}
