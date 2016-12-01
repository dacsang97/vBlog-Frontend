import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './auth';

const rootReducer = combineReducers({
  routing,
  auth: AuthReducer,
  form: formReducer,
});

export default rootReducer;
