import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { Home } from './containers';
import UserPage from './containers/UserPage';
import RepoPage from './containers/RepoPage';

export default <Route path="/" component={App}>
  <IndexRoute
    component={Home}
  />
  <Route
    path="/:login/:name"
    component={RepoPage}
  />
  <Route
    path="/:login"
    component={UserPage}
  />
</Route>;
