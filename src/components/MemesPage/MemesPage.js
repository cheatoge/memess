import React from 'react';
import { Meme } from '../Meme';
import './MemesPage.css'

class MemesPage extends React.Component {
  render() {
    const memes = this.props.memes
    const preparedMemes = []
    memes.forEach(memeJson => {
      preparedMemes.push(
        <Meme
          key={memeJson.view_url}
          meme={memeJson}
        />
      )
    });
    return (
      <div>
        <div className='pageNameWrapper'>
          <h2 className='pageName'>{this.props.siteName}</h2>
        </div>
        <div>
          {preparedMemes}
        </div>
      </div>
    )
  }
}

export { MemesPage };