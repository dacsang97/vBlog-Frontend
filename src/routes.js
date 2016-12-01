import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { Home, Login } from './containers';

export default (
  <Route path="/" component={App}>
    <IndexRoute
      component={Home}
    />
    <Route path="/login" component={Login} />
  </Route>
);

