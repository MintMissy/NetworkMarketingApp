import * as ShopActions from './shop.actions';

import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Shop } from '../model/shop.model';

export interface ShopsState extends EntityState<Shop> {}

export const shopsAdapter: EntityAdapter<Shop> = createEntityAdapter<Shop>();

export const shopsInitialState = shopsAdapter.getInitialState();

export const shopsReducer = createReducer(
  shopsInitialState,
  on(ShopActions.addShop, ShopActions.insertShopSuccess, (state, { shop }) => {
    return shopsAdapter.addOne(shop, state);
  }),
  on(ShopActions.addShops, (state, { shops }) => {
    return shopsAdapter.addMany(shops, state);
  }),
  on(ShopActions.updateShopSuccess, (state, { shop }) => {
    return shopsAdapter.upsertOne(shop, state);
  }),
  on(ShopActions.deleteShopSuccess, (state, { id }) => {
    return shopsAdapter.removeOne(id, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } = shopsAdapter.getSelectors();
export const selectShopIds = selectIds;
export const selectShopsEntities = selectEntities;
export const selectAllShops = selectAll;
export const selectShopsTotal = selectTotal;
