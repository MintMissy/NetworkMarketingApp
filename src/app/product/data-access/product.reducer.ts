import * as ProductActions from './product.actions';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Product } from '../model/product.model';

export interface ProductsState extends EntityState<Product> {}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const productsInitialState = productsAdapter.getInitialState();

export const productsReducer = createReducer(
  productsInitialState,
  on(ProductActions.addProduct, ProductActions.insertProductSuccess, (state, { product }) => {
    return productsAdapter.addOne(product, state);
  }),
  on(ProductActions.addProducts, (state, { products }) => {
    return productsAdapter.addMany(products, state);
  }),
  on(ProductActions.updateProductSuccess, (state, { product }) => {
    return productsAdapter.upsertOne(product, state);
  }),
  on(ProductActions.deleteProductSuccess, (state, { id }) => {
    return productsAdapter.removeOne(id, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } = productsAdapter.getSelectors();
export const selectProductIds = selectIds;
export const selectProductEntities = selectEntities;
export const selectAllProducts = selectAll;
export const selectProductsTotal = selectTotal;
