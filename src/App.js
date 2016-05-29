import React, { Component } from 'react';
import Site from './site';

import styles from './app.css';
import _ from 'underscore';

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
    const sites = _.map(this.state.sites, (site, siteId) => {
      return <Site siteId={siteId} at={this.props.params.at}/>
    });
    return (
      <div>
        <h1>
          {this.props.params.at} / { JSON.stringify(this.props.location.query) }
        </h1>
        <div>
          { sites }
        </div>
        <div>
          <h1>Timeline</h1>
        </div>
      </div>
    );
  }
}
