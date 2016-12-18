import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import routes from '../routes';
import DevTools from './DevTools';
import { NotFound } from './';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router history={history}>
        {routes}
        <Route path="*" component={NotFound} />
      </Router>
      <DevTools />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default Root;
