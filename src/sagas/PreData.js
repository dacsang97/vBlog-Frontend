/**
 * Created by sang on 12/16/16.
 */
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import PostApi from '../middleware/PostApi';
import UserApi from '../middleware/UserApi';
import { PostTypes } from '../actions/posts';
import { UsersTypes } from '../actions/users';

export function* loadPreData() {
  yield put({ type: UsersTypes.LOAD_ALL_USERS_REQUEST });
  try {
    const [users, posts] = yield [
      call(UserApi.loadAllUser),
      call(PostApi.loadAllPost),
    ];
    yield [
      put({ type: PostTypes.LOAD_ALL_POST_SUCCESS, posts: posts.data }),
      put({ type: UsersTypes.LOAD_ALL_USERS_SUCCESS, users: users.data }),
    ];
  } catch (error) {
    console.log(error);
  }
}

export default function* loadPreDataSaga() {
  yield [
    takeLatest('GET_PRE_DATA', loadPreData),
  ];
}
