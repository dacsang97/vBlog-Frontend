/**
 * Created by sang on 12/2/16.
 */
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import env from '../constants/env';

const BASE_URL = env.BASE_URL;

export default class AuthApi {
  static login(email, password) {
    const url = `${BASE_URL}/auth/sign_in`;
    return axios.post(url, {
      email,
      password,
    });
  }
  static checkToken() {
    const auth = JSON.parse(localStorage.getItem("authenticated"));
    if (auth) {
      const token = auth.token;
      const exp = new Date(jwtDecode(token).exp * 1000);
      const now = Date.now();
      if (exp > now) return { status: "ok", auth };
      return { status: "failure" };
    }
    return { status: "failure" };
  }
}
