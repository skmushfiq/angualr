import { createAction, props } from '@ngrx/store';

export const selectTeam = createAction(
  '[View Team Page] Select Team',
  props<{ id: string }>()
);
