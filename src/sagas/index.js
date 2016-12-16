/**
 * Created by sang on 12/2/16.
 */

/* ------- Sagas ------- */
import LoginSaga from './Login';
import PostSaga from './Post';
import LoadPreDataSaga from './PreData';

export default function* root() {
  yield [
    LoginSaga(),
    PostSaga(),
    LoadPreDataSaga(),
  ];
}
