import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, mergeMap, Observable, tap } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/data-access/authentication.service';
import { selectBusinessmanBusinesses } from 'src/app/businessman/data-access/businessman.selectors';
import { ShopGuard } from './shop.guard';

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
    const userData = this._authService.getUserData();
    const shopId = this.getSelectedShop().pipe(map((shop) => (shop === undefined ? '' : shop.id)));

    const userId = this._authService.getUserData().uid;
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
