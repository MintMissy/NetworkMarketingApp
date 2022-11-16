import * as BusinessActions from './business.actions';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Business } from '../model/business.model';

export interface BusinessState extends EntityState<Business> {}

export const businessesAdapter: EntityAdapter<Business> = createEntityAdapter<Business>();

export const businessesInitialState = businessesAdapter.getInitialState();

export const businessesReducer = createReducer(
  businessesInitialState,
  on(BusinessActions.addBusiness, BusinessActions.insertBusinessSuccess, (state, { business }) => {
    return businessesAdapter.addOne(business, state);
  }),
  on(BusinessActions.addBusinesses, (state, { businesses }) => {
    return businessesAdapter.addMany(businesses, state);
  }),
  on(BusinessActions.updateBusinessSuccess, (state, { business }) => {
    return businessesAdapter.upsertOne(business, state);
  }),
  on(BusinessActions.deleteBusinessSuccess, (state, { id }) => {
    return businessesAdapter.removeOne(id, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } = businessesAdapter.getSelectors();
export const selectBusinessIds = selectIds;
export const selectBusinessEntities = selectEntities;
export const selectAllBusinesses = selectAll;
export const selectBusinessTotal = selectTotal;
