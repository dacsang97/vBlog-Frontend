import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { Home, Login } from './containers';
import { redirectIfAuthenticated } from './middleware/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute
      component={Home}
    />
    <Route path="/login" component={redirectIfAuthenticated(Login)} />
  </Route>
);

