import React, { Component } from 'react';

import moment from 'moment';

import styles from './timeline.css';

class Timeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      at: new Date()
    };
  }

  render() {
    const range = 12;
    const lines = [];

    for (let i = -range/2; i <= range/2; i ++) {
      const date = moment(this.state.at).add(i, 'hours');
      lines.push({
        offset: i,
        date: date,
      });
    }

    return (
      <div className={styles.container}>
        <div className={styles.timeline}>
          {lines.map((tick) => (
            <span
              style={{ width: (100/(range + 1)) + '%' }}
              className={styles.timelineHourTick}
              >
              { tick.offset }
            </span>
          ))}
        </div>
      </div>
    )
  }
}

export default Timeline;
