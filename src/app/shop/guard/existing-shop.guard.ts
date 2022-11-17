import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, filter, first, map, tap } from 'rxjs';

import { ShopGuard } from './shop.guard';
import { loadShop } from '../data-access/shop.actions';
import { selectAllShops } from '../data-access/shop.selectors';

@Injectable({
  providedIn: 'root',
})
export class ExistingShopGuard extends ShopGuard implements CanActivate {
  constructor(private _injector: Injector) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const shopId = route.paramMap.get('shopId');
    if (shopId === null) {
      this.redirectToShopsPage();
      return false;
    }

    return this.store.select(selectAllShops).pipe(
      tap((shops) => {
        if (shops.length === 0) {
          this.store.dispatch(loadShop({ id: shopId }));
        }
      }),
      // Renavigation is handled in the effect on load shop effect
      // At this point I haven't found a more design friendly and optimal way
      // to do this issue
      filter((shops) => shops.length > 0),
      map(() => true),
      first()
    );
  }
}
