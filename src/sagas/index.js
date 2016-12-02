/**
 * Created by sang on 12/2/16.
 */
import { takeLatest } from 'redux-saga';
/* ------- Types ------- */
import { LoginTypes } from '../actions/auth';

/* ------- Sagas ------- */
import { login } from './Login';

export default function* root() {
  yield [
    takeLatest(LoginTypes.LOGIN_REQUEST, login),
  ]
}
