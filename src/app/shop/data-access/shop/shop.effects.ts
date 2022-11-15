import * as ShopActions from './shop.actions';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ShopService } from './shop.service';

@Injectable({
  providedIn: 'root',
})
export class NameEffects {
  loadShop$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ShopActions.loadShop),
      mergeMap((action) => {
        return this.shopService.getShop(action.id).pipe(
          map((shop) => {
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
          map(() => ShopActions.insertShopSuccess({ shop: action.shop })),
          catchError(() => of(ShopActions.insertShopFailed({ shop: action.shop })))
        );
      })
    );
  });
  updateShop$ = this.actions$.pipe(
    ofType(ShopActions.updateShop),
    mergeMap((action) => {
      return this.shopService.updateShop(action.shop).pipe(
        map(() => ShopActions.updateShopSuccess({ shop: action.shop })),
        catchError(() => of(ShopActions.updateShopFailed({ shop: action.shop })))
      );
    })
  );
  deleteShop$ = this.actions$.pipe(
    ofType(ShopActions.deleteShop),
    mergeMap((action) => {
      return this.shopService.deleteShop(action.id).pipe(
        map(() => ShopActions.deleteShopSuccess({ id: action.id })),
        catchError(() => of(ShopActions.deleteShopFailed({ id: action.id })))
      );
    })
  );

  constructor(private actions$: Actions, private shopService: ShopService) {}
}
