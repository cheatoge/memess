import React from 'react';

class VideoMeme extends React.Component {
  render() {
    return (
      <div>
        <video src={this.props.url} preload="metadata" controls />
      </div>
    )
  }
}

export default VideoMeme
