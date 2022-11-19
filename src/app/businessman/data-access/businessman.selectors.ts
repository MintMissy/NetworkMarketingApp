import * as fromBusinessman from './businessman.reducer';

import { createFeatureSelector, createSelector } from '@ngrx/store';

export const BUSINESSMEN_STATE_NAME = 'businessmen';

export const selectBusinessmanState =
  createFeatureSelector<fromBusinessman.BusinessmenState>(BUSINESSMEN_STATE_NAME);

export const selectBusinessmanIds = createSelector(
  selectBusinessmanState,
  fromBusinessman.selectBusinessmanIds
);

export const selectBusinessmanEntities = createSelector(
  selectBusinessmanState,
  fromBusinessman.selectBusinessmanEntities
);

export const selectAllBusinessmen = createSelector(
  selectBusinessmanState,
  fromBusinessman.selectAllBusinessmen
);

export const selectBusinessmanTotal = createSelector(
  selectBusinessmanState,
  fromBusinessman.selectBusinessmanTotal
);

export const selectBusinessmanEntity = (id: string) => {
  return createSelector(selectBusinessmanState, (state) => selectBusinessman(state, id));
};

export const selectBusinessmanBusinesses = (id: string) => {
  return createSelector(selectBusinessmanState, (state) => {
    const businessman = selectBusinessman(state, id);
    return businessman == undefined ? [] : businessman.ownedBusinesses;
  });
};

function selectBusinessman(businessmenState: fromBusinessman.BusinessmenState, businessmanId: string) {
  return Object.values({ ...businessmenState.entities }).find(
    (entity) => entity?.id == businessmanId
  );
}
