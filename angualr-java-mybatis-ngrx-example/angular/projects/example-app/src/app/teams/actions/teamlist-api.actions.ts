import { createAction, props } from '@ngrx/store';

import { Team } from '@example-app/teams/models';

/**
 * Add Team to Collection Actions
 */
export const addTeamSuccess = createAction(
  '[Team Collection/API] Add Team Success',
  props<{ team: Team }>()
);

export const addTeamFailure = createAction(
  '[Team Collection/API] Add Team Failure',
  props<{ team: Team }>()
);

/**
 * Remove Team from Collection Actions
 */
export const removeTeamSuccess = createAction(
  '[Team Collection/API] Remove Team Success',
  props<{ team: Team }>()
);

export const removeTeamFailure = createAction(
  '[Team Collection/API] Remove Team Failure',
  props<{ team: Team }>()
);

/**
 * Load Collection Actions
 */
export const loadTeamsSuccess = createAction(
  '[Team Collection/API] Load Teams Success',
  props<{ teams: Team[] }>()
);

export const loadTeamsFailure = createAction(
  '[Team Collection/API] Load Teams Failure',
  props<{ error: any }>()
);
