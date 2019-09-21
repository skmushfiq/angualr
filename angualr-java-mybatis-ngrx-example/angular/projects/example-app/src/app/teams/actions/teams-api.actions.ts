import { createAction, props } from '@ngrx/store';

import { Team } from '@example-app/teams/models';

export const searchSuccess = createAction(
  '[Teams/API] Search Success',
  props<{ teams: Team[] }>()
);

export const searchFailure = createAction(
  '[Teams/API] Search Failure',
  props<{ errorMsg: string }>()
);
