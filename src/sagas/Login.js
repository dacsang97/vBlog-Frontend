/**
 * Created by sang on 12/2/16.
 */
import { put } from 'redux-saga/effects';
import LoginActions from '../actions/auth';

export function* login({ username, password }) {
  if (password === '123456') {
    // dispatch failure
    yield put(LoginActions.loginFailure('WRONG'));
  } else {
    // dispatch successful logins
    yield put(LoginActions.loginSuccess(username));
  }
}

export function* logout() {
  yield put(LoginActions.logout());
}
