import { createReducer, on } from '@ngrx/store';

import {
  TeamListApiActions,
  TeamListPageActions,
} from '../actions';

export const teamListFeatureKey = 'teamlist';

export interface State {
  loaded: boolean;
  loading: boolean;
  ids: string[];
}

const initialState: State = {
  loaded: false,
  loading: false,
  ids: [],
};

export const reducer = createReducer(
  initialState,
  on(TeamListPageActions.loadList, state => ({
    ...state,
    loading: true,
  })),
  on(TeamListApiActions.loadTeamsSuccess, (state, { teams }) => ({
    loaded: true,
    loading: false,
    ids: teams.map(team => team.id),
  })),
  // Supports handing multiple types of actions
  // on(
  //   TeamListApiActions.addTeamSuccess,
  //   TeamListApiActions.addTeamFailure,
  //   (state, { team }) => {
  //     if (state.ids.indexOf(team.id) > -1) {
  //       return state;
  //     }
  //     return {
  //       ...state,
  //       ids: [...state.ids, team.id],
  //     };
  //   }
  // ),
  on(
    TeamListApiActions.removeTeamSuccess,
    TeamListApiActions.removeTeamFailure,
    (state, { team }) => ({
      ...state,
      ids: state.ids.filter(id => id !== team.id),
    })
  )
);

export const getLoaded = (state: State) => state.loaded;

export const getLoading = (state: State) => state.loading;

export const getIds = (state: State) => state.ids;
