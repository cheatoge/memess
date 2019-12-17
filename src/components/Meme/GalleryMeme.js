import React from 'react';
import ImageMeme from './ImageMeme';
import VideoMeme from './VideoMeme';
import {getExtension, isVideoExtension, isImageExtension} from '../../util/utility';

class GalleryMeme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlIndex: 0
    }

    this.nextMeme = this.nextMeme.bind(this)
    this.previousMeme = this.previousMeme.bind(this)
  }

  nextMeme() {
    this.setState((state) => {
      const nextIndex = state.urlIndex === this.props.urls.length - 1 ? 0 : state.urlIndex + 1

      return {urlIndex: nextIndex}
    })
  }

  previousMeme() {
    this.setState((state) => {
      const nextIndex = state.urlIndex === 0 ? this.props.urls.length - 1 : state.urlIndex - 1
      
      return {urlIndex: nextIndex}
    })
  }

  render() {
    let memes = this.props.urls.map(url => {
      const extension = getExtension(url)
      if (isImageExtension(extension)) {
        return <ImageMeme url={url} />
      } else if (isVideoExtension(extension)) {
        return <VideoMeme url={url} />
      } else {
        return <p>Unsupported extension :(</p>
      }
    })

    return (
      <div>
        {memes[this.state.urlIndex]}
        <button onClick={this.previousMeme}>{'<<'}</button>
        <button onClick={this.nextMeme}>{'>>'}</button>
      </div>
    )
  }
}

export default GalleryMeme