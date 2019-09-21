import {
  TeamListApiActions,
  SearchTeamPageActions,
  TeamsApiActions,
} from '../actions';
import { createReducer, on } from '@ngrx/store';

export const searchFeatureKey = 'searchteam';

export interface State {
  ids: string[];
  loading: boolean;
  error: string;
  query: string;
}

const initialState: State = {
  ids: [],
  loading: false,
  error: '',
  query: '',
};

export const reducer = createReducer(
  initialState,
  on(SearchTeamPageActions.searchTeams, (state, { query }) => {
    return query === ''
      ? {
          ids: [],
          loading: false,
          error: '',
          query,
        }
      : {
          ...state,
          loading: true,
          error: '',
          query,
        };
  }),
  on(TeamsApiActions.searchSuccess, (state, { teams }) => ({
    ids: teams.map(team => team.id),
    loading: false,
    error: '',
    query: state.query,
  })),
  on(TeamsApiActions.searchFailure, (state, { errorMsg }) => ({
    ...state,
    loading: false,
    error: errorMsg,
  }))
);

export const getIds = (state: State) => state.ids;

export const getQuery = (state: State) => state.query;

export const getLoading = (state: State) => state.loading;

export const getError = (state: State) => state.error;
