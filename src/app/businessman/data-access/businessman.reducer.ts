import * as BusinessmanActions from './businessman.actions';

import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';

import { Businessman } from '../model/businessman.model';

export interface BusinessmenState extends EntityState<Businessman> {}

export const businessmenAdapter: EntityAdapter<Businessman> = createEntityAdapter<Businessman>();

export const businessmenInitialState = businessmenAdapter.getInitialState();

export const businessmenReducer = createReducer(
  businessmenInitialState,
  on(
    BusinessmanActions.addBusinessman,
    BusinessmanActions.insertBusinessmanSuccess,
    (state, { businessman }) => {
      return businessmenAdapter.addOne(businessman, state);
    }
  ),
  on(BusinessmanActions.addBusinessmen, (state, { businessmen }) => {
    return businessmenAdapter.addMany(businessmen, state);
  }),
  on(BusinessmanActions.updateBusinessmanSuccess, (state, { businessman }) => {
    return businessmenAdapter.upsertOne(businessman, state);
  }),
  on(BusinessmanActions.deleteBusinessmanSuccess, (state, { id }) => {
    return businessmenAdapter.removeOne(id, state);
  })
);

const { selectIds, selectEntities, selectAll, selectTotal } = businessmenAdapter.getSelectors();
export const selectBusinessmanIds = selectIds;
export const selectBusinessmanEntities = selectEntities;
export const selectAllBusinessmen = selectAll;
export const selectBusinessmanTotal = selectTotal;
