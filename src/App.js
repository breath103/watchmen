import React, { Component } from 'react';
import { withRouter } from 'react-router'
import _ from 'underscore';

import AppBar from 'material-ui/AppBar';
import Timeline from './timeline';

import styles from './app.css';
import gridStyles from './grid.css';

import Sites from './sites';
import TimeFormatHelper from './timeFormatHelper';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sites: {
        'naver' : { visible: true },
        'daum'  : { visible: true },
        'nate'  : { visible: true },
        'zum'   : { visible: true },
      }
    };
  }

  componentDidMount() {
  }

  get date() {
    return this.props.params.at.slice(0, 'YYYY-MM-DD'.length);
  }
  set date(date) {
    this.props.router.push(`/${date}-${this.hour}`);
  }

  get hour() {
    return this.props.params.at.slice('YYYY-MM-DD'.length + 1);
  }
  set hour(hour) {
    hour = `${hour}`;
    if (hour.length == 1)
      hour = `0${hour}`
    this.props.router.push(`/${this.date}-${hour}`);
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
        overflowY: 'auto',
      },
    };

    const { location, params } = this.props;

    return (
      <div className={gridStyles['single-fill-container']}>
        <AppBar title="Watchmen">
          <input
            type='date'
            value={this.date}
            onChange={(e) => this.date = e.target.value}
          />
          <input
            type="number"
            value={this.hour}
            min="0"
            max="24"
            onChange={(e) => this.hour = e.target.value}
          />
        </AppBar>
        <Sites at={params.at}/>
      </div>
    );
  }
}

export default withRouter(App);
