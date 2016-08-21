import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ReduxApp from './ReduxApp';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';

export default (
  <Route path="/" component={ReduxApp}>
    <IndexRoute component={HomePage}/>
    <Route path="admin" component={AdminPage} />
  </Route>
)
