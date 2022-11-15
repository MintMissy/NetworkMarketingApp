import { createAction, props } from '@ngrx/store';

import { Product } from '../../model/product.model';

export const loadProduct = createAction('[Products] Load Product', props<{ productId: string }>());
export const loadProducts = createAction('[Products] Load Products');
export const addProduct = createAction('[Products] Add Product', props<{ product: Product }>());
export const addProducts = createAction('[Products] Add Product', props<{ products: Product[] }>());

export const updateProduct = createAction(
  '[Products] Update Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[Products] Update Product Success',
  props<{ product: Product }>()
);
export const updateProductFailed = createAction(
  '[Products] Update Product Failed',
  props<{ product: Product }>()
);

export const insertProduct = createAction(
  '[Products] Insert Product',
  props<{ product: Product }>()
);
export const insertProductSuccess = createAction(
  '[Products] Insert Product Success',
  props<{ product: Product }>()
);
export const insertProductFailed = createAction(
  '[Products] Insert Product Failed',
  props<{ product: Product }>()
);

export const deleteProduct = createAction('[Products] Delete Product', props<{ id: string }>());
export const deleteProductSuccess = createAction(
  '[Products] Delete Product Success',
  props<{ id: string }>()
);
export const deleteProductFailed = createAction(
  '[Products] Delete Product Failed',
  props<{ id: string }>()
);
