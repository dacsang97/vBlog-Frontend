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

export const success = (state: Object, { username } : Object) =>
  state.merge({
    authenticated: {
      user: {
        name: username,
      },
    },
  });

export const failure = (state: Object, { error } : Object) =>
  state.merge({
    ...INITIAL_STATE,
    error,
  });

export const logout = () => INITIAL_STATE;

export const checkToken = (state: Object, { token } : Object) => {
  console.log(token);
  return state;
}

const reducer = createReducer(INITIAL_STATE, {
  [types.LOGIN_REQUEST]: request,
  [types.LOGIN_SUCCESS]: success,
  [types.LOGIN_FAILURE]: failure,
  [types.LOGOUT]: logout,
  [types.CHECK_TOKEN]: checkToken,
});

export default reducer;
