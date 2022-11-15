import * as ProductActions from './product.actions';

import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Product } from '../../model/product.model';

export interface ProductsState extends EntityState<Product> {}

export const productsAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const productsInitialState = productsAdapter.getInitialState();

export const productsReducer = createReducer(
  productsInitialState,
  on(ProductActions.addProduct, (state, { product }) => {
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
