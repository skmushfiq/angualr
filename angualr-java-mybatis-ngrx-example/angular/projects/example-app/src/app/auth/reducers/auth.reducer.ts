import { createReducer, on } from '@ngrx/store';
import { AuthApiActions, AuthActions } from '@example-app/auth/actions';
import { UserPackage } from '@example-app/auth/models';

export const statusFeatureKey = 'status';

export interface State {
  userInfo: UserPackage | null;
}

export const initialState: State = {
  userInfo: null,
};

export const reducer = createReducer(
  initialState,
  on(AuthApiActions.loginSuccess, (state, { userInfo }) => ({ ...state, userInfo })),
  on(AuthActions.logout, () => initialState)
);

export const getUserInfo = (state: State) => {
  console.log(state)
  return state.userInfo
};
