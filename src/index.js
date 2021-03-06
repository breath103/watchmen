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
import App from './app';

render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={hashHistory}>
      <Route path='/'>
        <IndexRedirect to={`/${new Date().getTime()}`} />
        <Route path='/:at' component={App}>
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
), document.getElementById('root'))
