import { Injectable, Injector } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
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
    return this.getSelectedProduct().pipe(
      map((product) => product !== undefined),
      tap((value) => {
        if (!value) {
          this.redirectToProductsPage();
        }
      })
    );
  }
}
