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
  checkToken: null,
  isAuthenticated: ['authenticate'],
});

export const LoginTypes = Types;
export default Creators;
