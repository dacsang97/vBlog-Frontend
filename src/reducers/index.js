import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth';
import PostReducer from './posts';

const rootReducer = combineReducers({
  routing,
  auth: AuthReducer,
  posts: PostReducer,
  form: formReducer,
});

export default rootReducer;
