import * as fromProducts from './product.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const PRODUCTS_STATE_NAME = 'products';

export const selectProductsState =
  createFeatureSelector<fromProducts.ProductsState>(PRODUCTS_STATE_NAME);

export const selectProductIds = createSelector(selectProductsState, fromProducts.selectProductIds);

export const selectProductEntities = createSelector(
  selectProductsState,
  fromProducts.selectProductEntities
);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAllProducts
);

export const selectProductsTotal = createSelector(
  selectProductsState,
  fromProducts.selectProductsTotal
);

export const selectProductEntity = (id: string) => {
  return createSelector(selectProductsState, (state) => {
    return Object.values({ ...state.entities }).find((entity) => entity?.id == id);
  });
};

export const selectProductsByShop = (id: string) => {
  return createSelector(selectProductsState, (state) => {
    return Object.values({ ...state.entities }).filter((entity) => entity?.shopId === id);
  });
};
