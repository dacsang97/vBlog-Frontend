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

export function* loadPost({ slug }) {
  try {
    const response = yield call(PostApi.loadPost, slug);
    const currentPost = response.data[0];
    console.log(currentPost);
    yield put({ type: types.LOAD_POST_SUCCESS, currentPost });
  } catch (errors) {
    yield put({ type: types.LOAD_POST_FAILURE, errors });
  }
}

export default function* PostSaga() {
  yield [
    takeLatest(types.LOAD_ALL_POST_REQUEST, loadAllPost),
    takeLatest(types.LOAD_POST_REQUEST, loadPost),
  ];
}
