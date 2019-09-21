import { createAction, props } from '@ngrx/store';

export const searchTeams = createAction(
  '[Team Search Page] Search Teams',
  props<{ query: string }>()
);
