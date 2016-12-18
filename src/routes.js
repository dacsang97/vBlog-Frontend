import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { Home, Login, Logout, PostView } from './containers';
import Profile from './containers/Profile';
import { redirectIfAuthenticated, redirectIfGuest } from './middleware/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/posts">
      <IndexRoute component={Home} />
      <Route path=":postSlug" component={PostView} />
    </Route>
    {/* Authenticated */}
    <Route path="/login" component={redirectIfAuthenticated(Login)} />
    <Route path="/logout" component={redirectIfGuest(Logout, '/')} />
    <Route path="/profile" component={redirectIfGuest(Profile)} />
  </Route>
);

