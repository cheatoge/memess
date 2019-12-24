import React from 'react'
import { MemeHeader } from '../MemeHeader'
import { MemeFooter } from '../MemeFooter'
import { TextMeme } from '../TextMeme'
import { ImageMeme } from '../ImageMeme'
import { VideoMeme } from '../VideoMeme'
import { GalleryMeme } from '../GalleryMeme'
import { ErrorWindow } from '../ErrorWindow'
import './MemesPage.css'

class MemesPage extends React.Component {
  render() {
    const memes = this.props.memes
    const wrappedMemes = memes.map(meme => {
      const content = meme.content

      const header = <MemeHeader href={meme.url}>{meme.title}</MemeHeader>
      const footer = (
        <MemeFooter source={meme.url} commentCount={meme.comment_count} />
      )

      let preparedContent
      switch (content.contentType) {
        case 'TEXT':
          preparedContent = <TextMeme content={meme.content} />
          break

        case 'IMAGE':
          preparedContent = <ImageMeme content={meme.content} />
          break

        case 'VIDEO':
          preparedContent = <VideoMeme content={meme.content} />
          break

        case 'GALLERY':
          preparedContent = <GalleryMeme content={meme.content} />
          break

        default:
          preparedContent = (
            <ErrorWindow hideCloseButton={true}>
              Nieobsługiwany format pliku :(
            </ErrorWindow>
          )
          break
      }

      return (
        <div key={meme.view_url} className="meme-wrapper">
          {header}
          {preparedContent}
          {footer}
        </div>
      )
    })

    return (
      <div>
        <div className="memes-page-header">
          <h2 className="memes-page-name">{this.props.siteName}</h2>
        </div>
        <div>{wrappedMemes}</div>
      </div>
    )
  }
}

export { MemesPage }
