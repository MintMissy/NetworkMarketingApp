import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { ShopGuard } from './shop.guard';

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
    return this.getSelectedShop(route.paramMap).pipe(
      map((shop) => shop !== undefined),
      tap((value) => {
        if (!value) {
          this.redirectToShopsPage();
        }
      })
    );
  }
}
