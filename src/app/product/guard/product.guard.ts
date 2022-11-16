import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { selectProductEntity } from '../data-access/product.selectors';

export abstract class ProductGuard {
  protected router: Router;
  protected activeRoute: ActivatedRoute;
  protected store: Store<AppState>;

  constructor(private injectorObject: Injector) {
    this.router = this.injectorObject.get(Router);
    this.activeRoute = this.injectorObject.get(ActivatedRoute);
    this.store = <Store<AppState>>this.injectorObject.get(Store);
  }

  protected getSelectedProduct() {
    const productId = this.activeRoute.snapshot.paramMap.get('productId');
    if (productId === null) {
      return of(undefined);
    }

    return this.store.select(selectProductEntity(productId));
  }

  protected redirectToProductsPage() {
    this.router.navigate(['..']);
  }
}
