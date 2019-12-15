import React from 'react';
import ImageMeme from './ImageMeme';
import { CONTENT_TYPES } from './Config'

class Meme extends React.Component {
  render() {
    const meme = this.props.meme
    const content = meme.content
    
    return (
      <div>
        <h3>{meme.title}</h3>
        {
          content.contentType === CONTENT_TYPES.IMAGE &&
          <ImageMeme url={content.url} />
        }
      </div>
    )
  }
}

export default Meme;