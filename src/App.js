import React, { Component } from 'react';
import _ from 'underscore';

import AppBar from 'material-ui/AppBar';

import Site from './site';
import styles from './app.css';
import gridStyles from './grid.css';


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
        <AppBar title=""/>
        <div className={[
          gridStyles['single-fill-item'],
        ].join(' ')} style={{
          display: 'flex',
          position: 'relative',
        }}>
          <div
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              'background-color': 'rgba(183, 183, 183, 0.23)',
              overflow: 'scroll',
            }}
          >
            {_.map(this.state.sites, (site, siteId) => (
              <div
                style={{
                  width: '50%',
                  height: '50%',
                  display: 'inline-block',
                }}
              >
                <Site
                  siteId={siteId}
                  at={this.props.params.at}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
