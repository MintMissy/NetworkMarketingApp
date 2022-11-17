import * as ShopActions from './shop.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root',
})
export class ShopsEffects {
  loadShop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.loadShop),
      mergeMap((action) => {
        return this.shopService.getShop(action.id).pipe(
          map((shop) => {
            if (shop === null) {
              this.redirect();
              return ShopActions.empty();
            }
            return ShopActions.addShop({ shop: shop });
          })
        );
      })
    );
  });
  loadShops$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.loadShops),
      mergeMap(() => {
        return this.shopService.getShops().pipe(
          map((shops) => {
            return ShopActions.addShops({ shops: shops });
          })
        );
      })
    );
  });
  insertShop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.insertShop),
      mergeMap((action) => {
        return this.shopService.insertShop(action.shop).pipe(
          map((response) => {
            this.redirect();
            const clonedShop = { ...action.shop, id: response.name };
            return ShopActions.insertShopSuccess({ shop: clonedShop });
          }),
          catchError(() => of(ShopActions.insertShopFailed({ shop: action.shop })))
        );
      })
    );
  });
  updateShop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.updateShop),
      mergeMap((action) => {
        return this.shopService.updateShop(action.shop).pipe(
          map(() => {
            this.redirect();
            return ShopActions.updateShopSuccess({ shop: action.shop });
          }),
          catchError(() => of(ShopActions.updateShopFailed({ shop: action.shop })))
        );
      })
    );
  });
  deleteShop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.deleteShop),
      mergeMap((action) => {
        return this.shopService.deleteShop(action.id).pipe(
          map(() => {
            this.redirect();
            return ShopActions.deleteShopSuccess({ id: action.id });
          }),
          catchError(() => of(ShopActions.deleteShopFailed({ id: action.id })))
        );
      })
    );
  });

  private redirect() {
    this._router.navigate(['shops', 'my']);
  }

  constructor(
    private actions$: Actions,
    private shopService: ShopService,
    private _router: Router
  ) {}
}
