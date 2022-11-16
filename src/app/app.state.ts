import {
  businessmenReducer,
  BusinessmenState,
} from './businessman/data-access/businessman.reducer';
import { productsReducer, ProductsState } from './product/data-access/product.reducer';
import { shopsReducer, ShopsState } from './shop/data-access/shop.reducer';

import { businessesReducer } from './business/data-access/business.reducer';
import { BUSINESSES_STATE_NAME } from './business/data-access/business.selectors';
import { Business } from './business/model/business.model';
import { BUSINESSMEN_STATE_NAME } from './businessman/data-access/businessman.selectors';
import { PRODUCTS_STATE_NAME } from './product/data-access/product.selectors';
import { SHOPS_STATE_NAME } from './shop/data-access/shop.selectors';

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
};
