import React from 'react';

class VideoMeme extends React.Component {
  render() {
    return (
      <div>
        <video src={this.props.url} preload="metadata" muted controls width='100%' height='auto' />
      </div>
    )
  }
}

export default VideoMeme
