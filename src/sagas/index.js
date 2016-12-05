/**
 * Created by sang on 12/2/16.
 */

/* ------- Sagas ------- */
import LoginSaga from './Login';

export default function* root() {
  yield [
    LoginSaga(),
  ];
}
