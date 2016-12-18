/**
 * Created by sang on 12/18/16.
 */
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import UserApi from '../middleware/UserApi';
import { UsersTypes as types } from '../actions/users';


export function* loadUser({ userId }) {
  try {
    const response = yield call(UserApi.loadUserId, userId);
    const currentUser = response.data;
    console.log(currentUser);
    yield put({ type: types.LOAD_USER_SUCCESS, currentUser });
  } catch (errors) {
    yield put({ type: types.LOAD_USER_FAILURE, errors });
  }
}

export default function* UserSaga() {
  yield [
    takeLatest(types.LOAD_USER_REQUEST, loadUser),
  ];
}
