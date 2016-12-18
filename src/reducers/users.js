/**
 * Created by sang on 12/16/16.
 */
import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import { UsersTypes as types } from '../actions/users';

const INITIAL_STATE = immutable({
  users: [],
  fetching: false,
  errors: undefined,
});

export const loadAllUsersRequest = (state: Object) =>
  state.merge({ fetching: true });

export const loadAllUsersSuccess = (state: Object, { users } : Object) =>
  state.merge({
    users,
    fetching: false,
  });

export const loadAllUsersFailure = (state: Object, { errors } : Object) =>
  state.merge({
    errors,
    fetching: false,
  });

export const loadUserRequest = (state: Object) =>
  state.merge({ fetching: true });

export const loadUserSuccess = (state: Object, { currentUser } : Object) =>
  state.merge({
    currentUser,
    fetching: false,
  });

export const loadUserFailure = (state: Object, { errors } : Object) =>
  state.merge({
    errors,
    fetching: false,
  });

const reducer = createReducer(INITIAL_STATE, {
  [types.LOAD_ALL_USERS_REQUEST]: loadAllUsersRequest,
  [types.LOAD_ALL_USERS_SUCCESS]: loadAllUsersSuccess,
  [types.LOAD_ALL_USERS_FAILURE]: loadAllUsersFailure,
  [types.LOAD_USER_REQUEST]: loadUserRequest,
  [types.LOAD_USER_SUCCESS]: loadUserSuccess,
  [types.LOAD_USER_FAILURE]: loadUserFailure,
});

export default reducer;
