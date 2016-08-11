import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import routes from './routes';

import HomePage from './pages/HomePage';

const store = configureStore();
const app = (
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
)

render(app, document.getElementById('root'));
