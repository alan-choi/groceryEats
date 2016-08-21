import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Router, browserHistory } from 'react-router';
import store, { history } from './store/store';
import routes from './routes';
import AdminPage from './pages/AdminPage';
import ReduxApp from './ReduxApp';

const app = (
  <Provider store={store}>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
)

render(app, document.getElementById('root'));
