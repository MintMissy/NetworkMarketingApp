import { createAction, props } from '@ngrx/store';

import { Business } from '../model/business.model';

export const addBusiness = createAction(
  '[Business State] Add Business',
  props<{ business: Business }>()
);

export const editBusiness = createAction(
  '[Business State] Edit Business',
  props<{ business: Business }>()
);

export const deleteBusiness = createAction(
  '[Business State] Delete Business',
  props<{ businessId: string }>()
);

export const loadBusiness = createAction(
  '[Business State] Load Business',
  props<{ businessId: string }>()
);

export const loadBusinesses = createAction('[Business State] Load Business');
