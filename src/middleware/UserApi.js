/**
 * Created by sang on 12/16/16.
 */
import axios from 'axios';
import env from '../constants/env';

const BASE_URL = env.BASE_URL;

class UserApi {
  static loadAllUser() {
    return axios.get(`${BASE_URL}/users`);
  }
}

export default UserApi;
