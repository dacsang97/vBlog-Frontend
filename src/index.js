import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

/* Stylesheet */
import 'bootstrap-sass/assets/stylesheets/_bootstrap.scss';
import 'animate.css/animate.css';
import './assets/css/styles.scss';
import './assets/css/user-avatar.scss';
import './assets/css/simple-line-icons.scss';
import './assets/css/sweetalert.css';

import Root from './containers/Root';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Root store={store} history={history} />,
  document.getElementById('root'),
);
