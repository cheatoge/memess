import React from 'react'
import { ImageMeme } from '../ImageMeme'
import { VideoMeme } from '../VideoMeme'
import { ErrorWindow } from '../ErrorWindow'
import {
  getExtension,
  isVideoExtension,
  isImageExtension
} from '../../util/utility'
import './GalleryMeme.css'

class GalleryMeme extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      urlIndex: 0
    }
  }

  nextMeme = () => {
    this.setState(state => {
      const nextIndex =
        state.urlIndex === this.props.content.urls.length - 1
          ? 0
          : state.urlIndex + 1

      return { urlIndex: nextIndex }
    })
  }

  previousMeme = () => {
    this.setState(state => {
      const nextIndex =
        state.urlIndex === 0
          ? this.props.content.urls.length - 1
          : state.urlIndex - 1

      return { urlIndex: nextIndex }
    })
  }

  render() {
    let memes = this.props.content.urls.map(url => {
      const extension = getExtension(url)
      if (isImageExtension(extension)) {
        return <ImageMeme key={url} content={{ url: url }} />
      } else if (isVideoExtension(extension)) {
        return <VideoMeme key={url} content={{ url: url }} />
      } else {
        return (
          <ErrorWindow key={url} hideCloseButton={true}>
            Nieobsługiwany format pliku :(
          </ErrorWindow>
        )
      }
    })

    return (
      <div>
        {memes[this.state.urlIndex]}
        <div className="gallery-nav">
          <button className="button gallery-button" onClick={this.previousMeme}>
            <b>{'<'}</b> Poprzedni
          </button>
          <button className="button gallery-button" onClick={this.nextMeme}>
            Następny <b>{'>'}</b>
          </button>
        </div>
      </div>
    )
  }
}

export { GalleryMeme }
