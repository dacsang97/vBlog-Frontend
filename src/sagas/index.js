/**
 * Created by sang on 12/2/16.
 */

/* ------- Sagas ------- */
import LoginSaga from './Login';
import PostSaga from './Post';
import UserSaga from './User';
import CategorySaga from './Category';
import LoadPreDataSaga from './PreData';

export default function* root() {
  yield [
    LoginSaga(),
    PostSaga(),
    UserSaga(),
    CategorySaga(),
    LoadPreDataSaga(),
  ];
}
