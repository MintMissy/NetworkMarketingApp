import * as fromShops from './shop.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const SHOPS_STATE_NAME = 'shops';

export const selectShopsState =
  createFeatureSelector<fromShops.ShopsState>(SHOPS_STATE_NAME);

export const selectShopIds = createSelector(
  selectShopsState,
  fromShops.selectShopIds
);

export const selectShopsEntities = createSelector(
  selectShopsState,
  fromShops.selectShopsEntities
);

export const selectAllShops = createSelector(
  selectShopsState,
  fromShops.selectAllShops
);

export const selectShopsTotal = createSelector(
  selectShopsState,
  fromShops.selectShopsTotal
);

export const getShopsEntity = (id: string) => {
  return createSelector(selectShopsState, (state) => {
    return Object.values({ ...state.entities }).find((entity) => entity?.id == id);
  });
};
