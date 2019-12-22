import React from 'react';
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

      const header = <MemeHeader href={meme.url} >{meme.title}</MemeHeader>
      const footer = <MemeFooter
        source={meme.url}
        commentCount={meme.comment_count}
      />

      let preparedContent
      switch (content.contentType) {
        case 'TEXT':
          preparedContent = <TextMeme key={meme.view_url} content={meme.content} />
          break;

        case 'IMAGE':
          preparedContent = <ImageMeme key={meme.view_url} content={meme.content} />
          break;

        case 'VIDEO':
          preparedContent = <VideoMeme key={meme.view_url} content={meme.content} />
          break;

        case 'GALLERY':
          preparedContent = <GalleryMeme key={meme.view_url} content={meme.content} />
          break;

        default:
          preparedContent = (
            <ErrorWindow key={meme.view_url} hideCloseButton={true}>
              Nieobsługiwany format pliku :(
            </ErrorWindow>
          )
          break;
      }

      return (
        <div className='meme block' >
          {header}
          {preparedContent}
          {footer}
        </div>
      )
    })

    // memes.forEach(memeJson => {
    //   preparedMemes.push(
    //     <Meme
    //       key={memeJson.view_url}
    //       meme={memeJson}
    //     />
    //   )
    // });
    return (
      <div>
        <div className='pageNameWrapper'>
          <h2 className='pageName'>{this.props.siteName}</h2>
        </div>
        <div>
          {wrappedMemes}
        </div>
      </div>
    )
  }
}

export { MemesPage };