import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Injectable, Injector } from '@angular/core';
import { Observable, filter, first, map, tap } from 'rxjs';

import { ProductGuard } from './product.guard';
import { loadProduct } from '../data-access/product.actions';
import { selectAllProducts } from '../data-access/product.selectors';

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
    const productId = route.paramMap.get('productId');
    if (productId === null) {
      this.redirectToProductsPage();
      return false;
    }

    return this.store.select(selectAllProducts).pipe(
      tap((products) => {
        if (products.length === 0) {
          this.store.dispatch(loadProduct({ id: productId }));
        }
      }),
      // Renavigation is handled in the effect on load product effect
      // At this point I haven't found a more design friendly and optimal way
      // to do this issue
      filter((products) => products.length > 0),
      map(() => true),
      first()
    );
  }
}
