import { BusinessmenState, businessmenReducer } from './businessman/data-access/businessman.reducer';
import { ProductsState, productsReducer } from './shop/data-access/product/product.reducer';
import { ShopsState, shopsReducer } from './shop/data-access/shop/shop.reducer';

import { BUSINESSES_STATE_NAME } from './business/data-access/business.selectors';
import { BUSINESSMEN_STATE_NAME } from './businessman/data-access/businessman.selectors';
import { Business } from './business/model/business.model';
import { PRODUCTS_STATE_NAME } from './shop/data-access/product/product.selectors';
import { SHOPS_STATE_NAME } from './shop/data-access/shop/shop.selectors';
import { businessesReducer } from './business/data-access/business.reducer';

export interface AppState {
  [SHOPS_STATE_NAME]: ShopsState;
  [PRODUCTS_STATE_NAME]: ProductsState;
  [BUSINESSES_STATE_NAME]: Business;
  [BUSINESSMEN_STATE_NAME]: BusinessmenState;
}

export const appReducer = {
    [SHOPS_STATE_NAME]: shopsReducer,
    [PRODUCTS_STATE_NAME]: productsReducer,
    [BUSINESSES_STATE_NAME]: businessesReducer,
    [BUSINESSMEN_STATE_NAME]: businessmenReducer,
}