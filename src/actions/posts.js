/**
 * Created by sang on 12/7/16.
 */
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  loadAllPostRequest: null,
  loadAllPostSuccess: ['posts'],
  loadAllPostFailure: ['error'],
});

export const PostTypes = Types;
export default Creators;
