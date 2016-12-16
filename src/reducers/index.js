import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth';
import PostReducer from './posts';
import UserReducer from './users';

const rootReducer = combineReducers({
  routing,
  auth: AuthReducer,
  posts: PostReducer,
  users: UserReducer,
  form: formReducer,
});

export default rootReducer;
