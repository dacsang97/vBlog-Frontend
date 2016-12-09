/**
 * Created by sang on 12/7/16.
 */
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import PostApi from '../middleware/PostApi';
import { PostTypes as types } from '../actions/posts';

export function* loadAllPost() {
  try {
    const response = yield call(PostApi.loadAllPost);
    const posts = response.data;
    yield put({ type: types.LOAD_ALL_POST_SUCCESS, posts });
  } catch (errors) {
    yield put({ type: types.LOAD_ALL_POST_FAILURE, errors });
  }
}

export default function* PostSaga() {
  yield [
    takeLatest(types.LOAD_ALL_POST_REQUEST, loadAllPost),
  ];
}
