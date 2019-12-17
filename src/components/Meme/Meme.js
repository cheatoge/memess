import React from 'react';
import ImageMeme from './ImageMeme';
import TextMeme from './TextMeme';
import VideoMeme from './VideoMeme';
import GalleryMeme from './GalleryMeme';

const CONTENT_TYPES = {
  IMAGE: 'IMAGE',
  TEXT: 'TEXT',
  VIDEO: 'VIDEO',
  GALLERY: 'GALLERY'
}

class Meme extends React.Component {
  render() {
    const meme = this.props.meme
    const content = meme.content

    let memeView
    switch (content.contentType) {
      case CONTENT_TYPES.IMAGE:
        memeView = <ImageMeme url={content.url} />
        break;

      case CONTENT_TYPES.TEXT:
        memeView = <TextMeme text={content.text} />
        break;

      case CONTENT_TYPES.VIDEO:
        memeView = <VideoMeme url={content.url} />
        break;

      case CONTENT_TYPES.GALLERY:
        memeView = <GalleryMeme urls={content.urls} />
        break;

      default:
        memeView = <p>Nieobsługiwany format :(</p>
        break;
    }

    return (
      <div>
        <a href={meme.url} target='_blank' rel="noopener noreferrer">
          <h3>{meme.title}</h3>
        </a>
        {memeView != null && memeView}
        {
          meme.comment_count != null &&
          <p>Komentarzy: {meme.comment_count}</p>
        }
      </div>
    )
  }
}

export default Meme;