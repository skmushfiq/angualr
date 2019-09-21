import { Team } from '@example-app/teams/models';
import {
  createSelector,
  createFeatureSelector,
  combineReducers,
  Action,
} from '@ngrx/store';
import * as fromSearch from './search.reducer';
import * as fromTeams from './teams.reducer';
import * as fromTeamList from './teamlist.reducer';
import * as fromRoot from '@example-app/reducers';

export const teamsFeatureKey = 'teams';

export interface TeamsState {
  [fromSearch.searchFeatureKey]: fromSearch.State;
  [fromTeams.teamsFeatureKey]: fromTeams.State;
  [fromTeamList.teamListFeatureKey]: fromTeamList.State;
}

export interface State extends fromRoot.State {
  [teamsFeatureKey]: TeamsState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: TeamsState | undefined, action: Action) {
  return combineReducers({
    [fromSearch.searchFeatureKey]: fromSearch.reducer,
    [fromTeams.teamsFeatureKey]: fromTeams.reducer,
    [fromTeamList.teamListFeatureKey]: fromTeamList.reducer,
  })(state, action);
}

/**
 * A selector function is a map function factory. We pass it parameters and it
 * returns a function that maps from the larger state tree into a smaller
 * piece of state. This selector simply selects the `teams` state.
 *
 * Selectors are used with the `select` operator.
 *
 * ```ts
 * class MyComponent {
 *   constructor(state$: Observable<State>) {
 *     this.teamsState$ = state$.pipe(select(getTeamsState));
 *   }
 * }
 * ```
 */

/**
 * The createFeatureSelector function selects a piece of state from the root of the state object.
 * This is used for selecting feature states that are loaded eagerly or lazily.
 */
export const getTeamsState = createFeatureSelector<State, TeamsState>(
  teamsFeatureKey
);

/**
 * Every reducer module exports selector functions, however child reducers
 * have no knowledge of the overall state tree. To make them usable, we
 * need to make new selectors that wrap them.
 *
 * The createSelector function creates very efficient selectors that are memoized and
 * only recompute when arguments change. The created selectors can also be composed
 * together to select different pieces of state.
 */
export const getTeamEntitiesState = createSelector(
  getTeamsState,
  state => state.teams
);

export const getSelectedTeamId = createSelector(
  getTeamEntitiesState,
  fromTeams.getSelectedId
);

/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
export const {
  selectIds: getTeamIds,
  selectEntities: getTeamEntities,
  selectAll: getAllTeams,
  selectTotal: getTotalTeams,
} = fromTeams.adapter.getSelectors(getTeamEntitiesState);

export const getSelectedTeam = createSelector(
  getTeamEntities,
  getSelectedTeamId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);

/**
 * Just like with the teams selectors, we also have to compose the search
 * reducer's and collection reducer's selectors.
 */
export const getSearchState = createSelector(
  getTeamsState,
  (state: any) => state.search
);

export const getSearchTeamIds = createSelector(
  getSearchState,
  fromSearch.getIds
);
export const getSearchQuery = createSelector(
  getSearchState,
  fromSearch.getQuery
);
export const getSearchLoading = createSelector(
  getSearchState,
  fromSearch.getLoading
);
export const getSearchError = createSelector(
  getSearchState,
  fromSearch.getError
);

/**
 * Some selector functions create joins across parts of state. This selector
 * composes the search result IDs to return an array of teams in the store.
 */
export const getSearchResults = createSelector(
  getTeamEntities,
  getSearchTeamIds,
  (teams, searchIds) => {
    return searchIds
      .map(id => teams[id])
      .filter((team): team is Team => team != null);
  }
);

export const getCollectionState = createSelector(
  getTeamsState,
  (state: TeamsState) => state.teamlist
);

export const getCollectionLoaded = createSelector(
  getCollectionState,
  fromTeamList.getLoaded
);
export const getCollectionLoading = createSelector(
  getCollectionState,
  fromTeamList.getLoading
);
export const getCollectionTeamIds = createSelector(
  getCollectionState,
  fromTeamList.getIds
);

export const getTeamCollection = createSelector(
  getTeamEntities,
  getCollectionTeamIds,
  (entities, ids) => {
    return ids
      .map(id => entities[id])
      .filter((team): team is Team => team != null);
  }
);

export const isSelectedTeamInCollection = createSelector(
  getCollectionTeamIds,
  getSelectedTeamId,
  (ids, selected) => {
    return !!selected && ids.indexOf(selected) > -1;
  }
);
