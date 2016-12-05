/**
 * Created by sang on 11/30/16.
 */
import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import { LoginTypes as types } from '../actions/auth';

const INITIAL_STATE = immutable({
  authenticated: {
    guest: true,
    user: {},
  },
  fetching: false,
});

export const request = (state: Object) => state.merge({ fetching: true });

export const success = (state: Object, action : Object) => {
  const { payload: { user, token } } = action;
  localStorage.setItem('authenticated', JSON.stringify(action.payload));
  return state.merge({
    authenticated: {
      user,
      token,
      guess: false,
    },
    fetching: false,
  });
}

export const failure = (state: Object, { error } : Object) =>
  state.merge({
    ...INITIAL_STATE,
    error,
  });

export const logout = () => INITIAL_STATE;

export const checkToken = (state: Object) => state.merge({ fetching: true });

export const isAuthenticated = (state: Object, action: Object) => {
  const { payload: { user, token } } = action;
  return state.merge({
    authenticated: {
      user,
      token,
      guess: false,
    },
    fetching: false,
  });
}

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_REQUEST]: request,
  [types.LOGIN_SUCCESS]: success,
  [types.LOGIN_FAILURE]: failure,
  [types.LOGOUT]: logout,
  [types.CHECK_TOKEN]: checkToken,
  [types.IS_AUTHENTICATED]: isAuthenticated,
});

export default reducer;
