/**
 * Created by sang on 12/2/16.
 */
import { put, call } from 'redux-saga/effects';
import { takeLatest } from 'redux-saga';
import LoginActions, { LoginTypes as types } from '../actions/auth';
import { AuthApi } from '../middleware';

export function* login({ email, password }) {
  try {
    const response = yield call(AuthApi.login, email, password);
    const payload = response.data;
    yield put({ type: types.LOGIN_SUCCESS, payload });
  } catch (error) {
    const errors = error.response.data;
    yield put({ type: types.LOGIN_FAILURE, errors });
  }
}

export function* logout() {
  yield put(LoginActions.logout());
}

export function* checkToken() {
  const response = yield call(AuthApi.checkToken);
  if (response.status === "ok") {
    yield put({ type: types.IS_AUTHENTICATED, payload: response.auth });
  } else {
    yield put({ type: types.LOGOUT });
  }
}

export default function* LoginSaga() {
  yield [
    takeLatest(types.LOGIN_REQUEST, login),
    takeLatest(types.CHECK_TOKEN, checkToken),
  ]
}
