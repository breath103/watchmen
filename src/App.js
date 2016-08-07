import React, { Component } from 'react';
import _ from 'underscore';

import AppBar from 'material-ui/AppBar';
import Timeline from './timeline';

import styles from './app.css';
import gridStyles from './grid.css';

import Sites from './sites';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: {
        'naver' : {visible: true},
        'daum'  : {visible: true},
        'nate'  : {visible: true},
        'zum'   : {visible: true},
      }
    };
  }

  componentDidMount() {
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
      gridList: {
        width: '100%',
        // height: '100%',
        overflowY: 'auto',
      },
    };
    return (
      <div className={gridStyles['single-fill-container']}>
        <AppBar title="Watchmen">
          
        </AppBar>
        <Sites at={this.props.params.at}/>
      </div>
    );
  }
}
