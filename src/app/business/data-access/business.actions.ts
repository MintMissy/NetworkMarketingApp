import { createAction, props } from '@ngrx/store';

import { Business } from '../model/business.model';

export const empty = createAction('[Business] Empty');
export const loadBusiness = createAction('[Business] Load Business', props<{ id: string }>());
export const loadBusinesses = createAction('[Business] Load Businesses');
export const addBusiness = createAction('[Business] Add Business', props<{ business: Business }>());
export const addBusinesses = createAction(
  '[Business] Add Businesses',
  props<{ businesses: Business[] }>()
);

export const updateBusiness = createAction(
  '[Business] Update Business',
  props<{ business: Business }>()
);
export const updateBusinessSuccess = createAction(
  '[Business] Update Business Success',
  props<{ business: Business }>()
);
export const updateBusinessFailed = createAction(
  '[Business] Update Business Failed',
  props<{ business: Business }>()
);

export const insertBusiness = createAction(
  '[Business] Insert Business',
  props<{ business: Business }>()
);
export const insertBusinessSuccess = createAction(
  '[Business] Insert Business Success',
  props<{ business: Business }>()
);
export const insertBusinessFailed = createAction(
  '[Business] Insert Business Failed',
  props<{ business: Business }>()
);

export const deleteBusiness = createAction('[Business] Delete Business', props<{ id: string }>());
export const deleteBusinessSuccess = createAction(
  '[Business] Delete Business Success',
  props<{ id: string }>()
);
export const deleteBusinessFailed = createAction(
  '[Business] Delete Business Failed',
  props<{ id: string }>()
);
