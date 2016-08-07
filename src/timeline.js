import React, { Component } from 'react';

import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';

import moment from 'moment';

import styles from './timeline.scss';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      at: new Date()
    };
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.timeline}>
          <DatePicker hintText="Date" value={this.state.at} />
          <TimePicker hintText="Time" value={this.state.at} />
        </div>
      </div>
    );
  }
}

export default Timeline;
