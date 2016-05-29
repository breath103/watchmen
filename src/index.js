import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexRedirect } from 'react-router'
import { App } from './app';

render((
  <Router history={hashHistory}>
    <Route path='/'>
      <IndexRedirect to="/2016-5-29-4" />
      <Route path='/:at' component={App}>
      </Route>
    </Route>
  </Router>
), document.getElementById('root'))
