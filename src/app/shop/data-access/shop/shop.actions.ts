import { createAction, props } from '@ngrx/store';

import { Shop } from '../../model/shop.model';

export const addShop = createAction(
  '[Shop State] Add Shop',
  props<{ Shop: Shop }>()
);

export const editShop = createAction(
  '[Shop State] Edit Shop',
  props<{ Shop: Shop }>()
);

export const deleteShop = createAction(
  '[Shop State] Delete Shop',
  props<{ ShopId: string }>()
);

export const loadShop = createAction(
  '[Shop State] Load Shop',
  props<{ ShopId: string }>()
);

export const loadShopes = createAction('[Shop State] Load Shop');
