import React from 'react';
import ImageMeme from './ImageMeme';
import TextMeme from './TextMeme';
import VideoMeme from './VideoMeme';


const CONTENT_TYPES = {
  'IMAGE': 'IMAGE',
  'TEXT': 'TEXT',
  'VIDEO': 'VIDEO'
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

      default:
        break;
    }

    return (
      <div>
        <a href={meme.url}><h3>{meme.title}</h3></a>
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