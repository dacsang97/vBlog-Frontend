/**
 * Created by sang on 12/7/16.
 */
import { createReducer } from 'reduxsauce';
import immutable from 'seamless-immutable';
import { PostTypes as types } from '../actions/posts';

const INITIAL_STATE = immutable({
  posts: [],
  currentPost: undefined,
  fetching: false,
  errors: undefined,
});

export const loadAllPostRequest = (state: Object) =>
  state.merge({ fetching: true });

export const loadAllPostSuccess = (state: Object, { posts } : Object) =>
  state.merge({
    posts,
    fetching: false,
  });

export const loadAllPostFailure = (state: Object, { errors } : Object) =>
  state.merge({
    errors,
  });

const reducer = createReducer(INITIAL_STATE, {
  [types.LOAD_ALL_POST_REQUEST]: loadAllPostRequest,
  [types.LOAD_ALL_POST_SUCCESS]: loadAllPostSuccess,
  [types.LOAD_ALL_POST_FAILURE]: loadAllPostFailure,
});

export default reducer;

