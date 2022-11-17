import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, map, tap } from 'rxjs';

import { ProductGuard } from './product.guard';

@Injectable({
  providedIn: 'root',
})
export class ExistingProductGuard extends ProductGuard implements CanActivate {
  constructor(private _injector: Injector) {
    super(_injector);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.getSelectedProduct(route.paramMap).pipe(
      map((product) => product !== undefined),
      tap((value) => {
        if (!value) {
          this.redirectToProductsPage();
        }
      })
    );
  }
}
