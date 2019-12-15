import React from 'react';
import ImageMeme from './ImageMeme';
import { CONTENT_TYPES } from './Config'

class Meme extends React.Component {
  render() {
    const meme = this.props.meme
    const content = meme.content

    return (
      <div>
        <a href={meme.url}><h3>{meme.title}</h3></a>
        {
          content.contentType === CONTENT_TYPES.IMAGE &&
          <ImageMeme url={content.url} />
        }
        <p>Komentarzy: {meme.comment_count}</p>
      </div>
    )
  }
}

export default Meme;