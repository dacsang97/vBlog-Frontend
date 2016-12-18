import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import routes from '../routes';
import { NotFound } from './';


const Root = ({ store, history }) => (
  <Provider store={store}>
    <Router history={history}>
      {routes}
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default Root;
