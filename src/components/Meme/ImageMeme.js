import React from 'react';

class ImageMeme extends React.Component {
  render() {
    return <img src={this.props.url}></img>
  }
}

export default ImageMeme
