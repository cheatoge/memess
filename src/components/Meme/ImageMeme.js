import React from 'react';

class ImageMeme extends React.Component {
  render() {
    return (
      <div>
        <img alt="Image meme" src={this.props.url} />
      </div>
    )
  }
}

export default ImageMeme
