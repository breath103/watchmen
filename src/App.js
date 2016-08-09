import React, { Component } from 'react';
import { withRouter } from 'react-router'
import _ from 'underscore';

import AppBar from 'material-ui/AppBar';

import styles from './app.css';
import gridStyles from './grid.css';

import Sites from './sites';
import moment from 'moment';

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

  get momentAt() {
    return moment.unix(Number(this.props.params.at) / 1000);
  }

  updateParsedAt(options) {
    const date = this.momentAt;

    if (options.year) date.year(options.year);
    if (options.month) date.month(options.month);
    if (options.date) date.date(options.date);
    if (options.hour) date.hour(options.hour);
    if (options.minute) date.minute(options.minute);

    this.props.router.push(`/${date.valueOf()}`);
  }

  render() {
    const { location, params } = this.props;

    const momentAt = this.momentAt;

    return (
      <div className={[
        gridStyles['single-fill-container'],
        styles.app,
      ].join(' ')}>
        <header className={styles.header}>
          <input
            className={styles.headerInput}
            type="number"
            value={momentAt.year()}
            min="2015"
            max="2016"
            onChange={(e) => this.updateParsedAt({year: e.target.value})}
          />
          <span className={styles.headerInputLabel}>년</span>
          <input
            className={styles.headerInput}
            type="number"
            value={momentAt.month() + 1}
            min="0"
            max="12"
            onChange={(e) => this.updateParsedAt({month: e.target.value - 1})}
          />
          <span className={styles.headerInputLabel}>월</span>
          <input
            className={styles.headerInput}
            type="number"
            value={momentAt.date()}
            min="1"
            max="31"
            onChange={(e) => this.updateParsedAt({date: e.target.value})}
          />
          <span className={styles.headerInputLabel}>일</span>
          <input
            className={styles.headerInput}
            type="number"
            value={momentAt.hour()}
            min="0"
            max="23"
            onChange={(e) => this.updateParsedAt({hour: e.target.value})}
          />
          <span className={styles.headerInputLabel}>시</span>
          <input
            className={styles.headerInput}
            type="number"
            value={momentAt.minute()}
            min="0"
            max="59"
            onChange={(e) => this.updateParsedAt({minute: e.target.value})}
          />
          <span className={styles.headerInputLabel}>분</span>
          <small> Actually Crawled At </small>
          <span>{TimeFormatHelper.formattedTimestampFromAt(momentAt.valueOf())}</span>
        </header>
        <Sites at={params.at}/>
        <footer className={styles.appFooter}>
          Sympathique © {moment().format('YYYY')}
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
