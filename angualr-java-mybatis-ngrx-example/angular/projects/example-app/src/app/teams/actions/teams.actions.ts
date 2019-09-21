import { createAction, props } from '@ngrx/store';

import { Team } from '@example-app/teams/models';

export const loadTeam = createAction(
  '[Team Exists Guard] Load Team',
  props<{ team: Team }>()
);


/**
 * Add Team to Collection Action
 */
export const addTeam = createAction(
  '[Team Page] Add Book',
  props<{ team: Team }>()
);

/**
 * Remove Book from Collection Action
 */
export const removeTeam = createAction(
  '[Team Page] Remove Team',
  props<{ team: Team }>()
);

