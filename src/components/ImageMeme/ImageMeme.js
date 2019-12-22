import React from 'react';
import './ImageMeme.css'

const ImageMeme = (props) => {
  const content = props.content

  return (
    <div>
      <img className='image' alt='meme' src={content.url} />
    </div>
  )
}

export { ImageMeme }