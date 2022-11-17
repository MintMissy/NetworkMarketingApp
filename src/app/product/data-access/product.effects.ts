import * as ProductActions from './product.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Router } from '@angular/router';

@Injectable()
export class ProductEffects {
  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      mergeMap((action) => {
        return this.productService.getProduct(action.id).pipe(
          map((product) => {
            if (product === null) {
              this.redirect();
              return ProductActions.empty();
            }
            return ProductActions.addProduct({ product: product });
          })
        );
      })
    );
  });
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      mergeMap(() => {
        return this.productService.getProducts().pipe(
          map((products) => {
            return ProductActions.addProducts({ products: products });
          })
        );
      })
    );
  });
  insertProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.insertProduct),
      mergeMap((action) => {
        return this.productService.insertProduct(action.product).pipe(
          map((response) => {
            this.redirect();
            const clonedProduct = { ...action.product, id: response.name };
            return ProductActions.insertProductSuccess({ product: clonedProduct });
          }),
          catchError(() => of(ProductActions.insertProductFailed({ product: action.product })))
        );
      })
    );
  });
  updateProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      mergeMap((action) => {
        return this.productService.updateProduct(action.product).pipe(
          map(() => {
            this.redirect();
            return ProductActions.updateProductSuccess({ product: action.product });
          }),
          catchError(() => of(ProductActions.updateProductFailed({ product: action.product })))
        );
      })
    );
  });
  deleteProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      mergeMap((action) => {
        return this.productService.deleteProduct(action.id).pipe(
          map(() => {
            this.redirect();
            return ProductActions.deleteProductSuccess({ id: action.id });
          }),
          catchError(() => of(ProductActions.deleteProductFailed({ id: action.id })))
        );
      })
    );
  });

  private redirect() {
    this._router.navigate(['..']);
  }

  constructor(
    private actions$: Actions,
    private productService: ProductService,
    private _router: Router
  ) {}
}
