import React from 'react';

class ImageMeme extends React.Component {
  render() {
    return (
      <img margin='0' alt='meme' src={this.props.url} width='100%' height='auto' />
    )
  }
}

export default ImageMeme
