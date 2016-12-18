/**
 * Created by sang on 12/16/16.
 */
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadAllUsersRequest: null,
  loadAllUsersSuccess: ['users'],
  loadAllUsersFailure: ['errors'],
  loadUserRequest: ['userId'],
  loadUserSuccess: ['currentUser'],
  loadUserFailure: ['errors'],
});

export const UsersTypes = Types;
export default Creators;
