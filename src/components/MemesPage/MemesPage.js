import React from 'react';
import Meme from '../Meme/Meme';
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
        <h2>{this.props.siteName}</h2>
        <div>
          {preparedMemes}
        </div>
      </div>
    )
  }
}

export default MemesPage;