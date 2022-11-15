import { createAction, props } from '@ngrx/store';

import { Businessman } from '../model/businessman.model';

export const loadBusinessman = createAction('[Businessman] Load Businessman', props<{ id: string }>());
export const loadBusinessmen = createAction('[Businessman] Load Businessmen');
export const addBusinessman = createAction('[Businessman] Add Businessman', props<{ businessman: Businessman }>());
export const addBusinessmen = createAction('[Businessman] Add Businessman', props<{ businessmen: Businessman[] }>());

export const updateBusinessman = createAction(
  '[Businessman] Update Businessman',
  props<{ businessman: Businessman }>()
);
export const updateBusinessmanSuccess = createAction(
  '[Businessman] Update Businessman Success',
  props<{ businessman: Businessman }>()
);
export const updateBusinessmanFailed = createAction(
  '[Businessman] Update Businessman Failed',
  props<{ businessman: Businessman }>()
);

export const insertBusinessman = createAction(
  '[Businessman] Insert Businessman',
  props<{ businessman: Businessman }>()
);
export const insertBusinessmanSuccess = createAction(
  '[Businessman] Insert Businessman Success',
  props<{ businessman: Businessman }>()
);
export const insertBusinessmanFailed = createAction(
  '[Businessman] Insert Businessman Failed',
  props<{ businessman: Businessman }>()
);

export const deleteBusinessman = createAction('[Businessman] Delete Businessman', props<{ id: string }>());
export const deleteBusinessmanSuccess = createAction(
  '[Businessman] Delete Businessman Success',
  props<{ id: string }>()
);
export const deleteBusinessmanFailed = createAction(
  '[Businessman] Delete Businessman Failed',
  props<{ id: string }>()
);
