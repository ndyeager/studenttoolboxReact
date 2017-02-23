
require('normalize.css/normalize.css');
require('styles/App.css');

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import React from 'react';

class VideoComponent extends React.Component {
  render() {
    return (
      <div className='videoBackground'>
        <Video className='videoContainer' autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}>
            <source src={this.props.route.url} type="video/webm" />
        </Video>
      </div>
    );
  }
}

export default VideoComponent;
