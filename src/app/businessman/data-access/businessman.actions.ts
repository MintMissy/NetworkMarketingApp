import { createAction, props } from '@ngrx/store';

import { Businessman } from '../model/businessman.model';

export const addBusinessman = createAction(
  '[Businessman State] Add Businessman',
  props<{ Businessman: Businessman }>()
);

export const editBusinessman = createAction(
  '[Businessman State] Edit Businessman',
  props<{ Businessman: Businessman }>()
);

export const deleteBusinessman = createAction(
  '[Businessman State] Delete Businessman',
  props<{ BusinessmanId: string }>()
);

export const loadBusinessman = createAction(
  '[Businessman State] Load Businessman',
  props<{ BusinessmanId: string }>()
);

export const loadBusinessmen = createAction('[Businessman State] Load Businessman');
