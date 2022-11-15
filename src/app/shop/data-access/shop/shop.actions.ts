import { createAction, props } from '@ngrx/store';

import { Shop } from '../../model/shop.model';

export const loadShop = createAction('[Shops] Load Shop', props<{ id: string }>());
export const loadShops = createAction('[Shops] Load Shops');
export const addShop = createAction('[Shops] Add Shop', props<{ shop: Shop }>());
export const addShops = createAction('[Shops] Add Shop', props<{ shops: Shop[] }>());

export const updateShop = createAction('[Shops] Update Shop', props<{ shop: Shop }>());
export const updateShopSuccess = createAction(
  '[Shops] Update Shop Success',
  props<{ shop: Shop }>()
);
export const updateShopFailed = createAction('[Shops] Update Shop Failed', props<{ shop: Shop }>());

export const insertShop = createAction('[Shops] Insert Shop', props<{ shop: Shop }>());
export const insertShopSuccess = createAction(
  '[Shops] Insert Shop Success',
  props<{ shop: Shop }>()
);
export const insertShopFailed = createAction('[Shops] Insert Shop Failed', props<{ shop: Shop }>());

export const deleteShop = createAction('[Shops] Delete Shop', props<{ id: string }>());
export const deleteShopSuccess = createAction(
  '[Shops] Delete Shop Success',
  props<{ id: string }>()
);
export const deleteShopFailed = createAction('[Shops] Delete Shop Failed', props<{ id: string }>());
export function addProduct(addProduct: any, arg1: (state: any, { product }: { product: any; }) => any): import("@ngrx/store").ReducerTypes<import("@ngrx/entity").EntityState<Shop>, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
    throw new Error('Function not implemented.');
}

