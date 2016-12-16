/**
 * Created by sang on 12/7/16.
 */
import axios from 'axios';
import env from '../constants/env';

const BASE_URL = env.BASE_URL;

export default class PostApi {
  static loadAllPost() {
    const url = `${BASE_URL}/posts`;
    return axios.get(url);
  }
}
