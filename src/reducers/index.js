import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  routing,
  auth: AuthReducer,
});

export default rootReducer;
