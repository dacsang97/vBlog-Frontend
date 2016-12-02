/**
 * Created by sang on 11/30/16.
 */
import { createActions } from 'reduxsauce';
// import env from '../constants/env';

const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['email'],
  loginFailure: ['error'],
  logout: null,
  checkToken: ['token'],
});

export const checkToken = (token: String) => {
  const result = `${token}_token`;
  return dispatch => dispatch(Creators.checkToken(result));
}

export const LoginTypes = Types;
export default Creators;
