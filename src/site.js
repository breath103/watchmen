import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import IFrame from './iframe';
import moment from 'moment';

const S3_URL = 'http://watchmen-repo.s3-website.ap-northeast-2.amazonaws.com/store';

import TimeFormatHelper from './TimeFormatHelper';


function siteUrl(at, siteId) {
  const formattedTimestamp = TimeFormatHelper.formattedTimestampFromAt(at);

  const url = `${S3_URL}/${formattedTimestamp}/${siteId.toLowerCase()}.html`;
  return url;
}

class Site extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  loadComplete() {
    this.setState({
      loading: false
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    const { at, siteId } = this.props;
    const url = siteUrl(at, siteId);
    return (
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
          backgroundColor: 'white',
        }}
      >
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            display: (this.state.loading ? 'flex' : 'none'),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CircularProgress
            size={1.5}
          />
        </div>
        <IFrame
          style={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            border: '0px',
            display: (!this.state.loading ? 'block' : 'none')
          }}
          src={url}
          onChange={() => this.setState({loading: true})}
          onLoad={() => this.setState({loading: false})}
        >
        </IFrame>
      </div>
    );
  }
}
Site.propTypes = {
  siteId: React.PropTypes.string.isRequired,
  at: React.PropTypes.string.isRequired,
};

export default Site;
