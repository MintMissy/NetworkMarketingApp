import * as fromBusiness from './business.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const BUSINESSES_STATE_NAME = 'businesses';

export const selectBusinessState =
  createFeatureSelector<fromBusiness.BusinessState>(BUSINESSES_STATE_NAME);

export const selectBusinessIds = createSelector(
  selectBusinessState,
  fromBusiness.selectBusinessIds
);

export const selectBusinessEntities = createSelector(
  selectBusinessState,
  fromBusiness.selectBusinessEntities
);

export const selectAllBusinesses = createSelector(
  selectBusinessState,
  fromBusiness.selectAllBusinesses
);

export const selectBusinessTotal = createSelector(
  selectBusinessState,
  fromBusiness.selectBusinessTotal
);

export const selectBusinessEntity = (id: string) => {
  return createSelector(selectBusinessState, (state) => {
    return Object.values({ ...state.entities }).find((entity) => entity?.id == id);
  });
};

export const selectBusinessesByUser = (id: string) => {
  return createSelector(selectBusinessState, (state) => {
    return Object.values({ ...state.entities }).filter(business => business?.ownerId === id);
  });
};
