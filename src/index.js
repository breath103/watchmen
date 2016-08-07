import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, browserHistory, hashHistory, IndexRedirect } from 'react-router'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
// ======================================================== //

// material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Custom
import { App } from './app';

import moment from 'moment';

function formatTime(date) {
  return moment(date).utcOffset(0).format('YYYY-MM-DD-HH');
}

render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory}>
      <Route path='/'>
        2016-06-06-07
        <IndexRedirect to={`/${formatTime(new Date())}`} />
        <Route path='/:at' component={App}>
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'))
