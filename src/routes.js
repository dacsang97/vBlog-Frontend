import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import { Home, PostView } from './containers';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/posts">
      <IndexRoute component={Home} />
      <Route path=":postSlug" component={PostView} />
    </Route>
  </Route>
);

