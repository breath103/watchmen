import React, { Component } from 'react';
import _ from 'underscore';

import Site from './site';

import gridStyles from './grid.css';

import styles from './sites.scss';

export class Sites extends Component {
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

  render() {
    return (
      <div className={[
        gridStyles['single-fill-item'],
        styles.sitesContainer
      ].join(' ')}>
        <div
          className={styles.sitesInnerContainer}
        >
          {_.map(this.state.sites, (site, siteId) => (
            <div className={styles.site}>
              <Site
                siteId={siteId}
                at={this.props.at}
              />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Sites;
