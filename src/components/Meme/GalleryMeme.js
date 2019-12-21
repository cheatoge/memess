import React from 'react';
import ImageMeme from './ImageMeme';
import VideoMeme from './VideoMeme';
import { getExtension, isVideoExtension, isImageExtension } from '../../util/utility';
import './GalleryMeme.css'

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

      return { urlIndex: nextIndex }
    })
  }

  previousMeme() {
    this.setState((state) => {
      const nextIndex = state.urlIndex === 0 ? this.props.urls.length - 1 : state.urlIndex - 1

      return { urlIndex: nextIndex }
    })
  }

  render() {
    let memes = this.props.urls.map(url => {
      const extension = getExtension(url)
      if (isImageExtension(extension)) {
        return <ImageMeme key={url} url={url} />
      } else if (isVideoExtension(extension)) {
        return <VideoMeme key={url} url={url} />
      } else {
        return <p key={url}>Unsupported extension :(</p>
      }
    })

    return (
      <div>
        {memes[this.state.urlIndex]}
        <div className='galleryNav'>
          <button className='button galleryButton' onClick={this.previousMeme}><b>{'<'}</b> Poprzedni</button>
          <button className='button galleryButton' onClick={this.nextMeme}>Następny <b>{'>'}</b></button>
        </div>
      </div>
    )
  }
}

export default GalleryMeme