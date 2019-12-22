import React from 'react';

const MemeFooter = (props) => {
  return (
    <div className='memeBlock memeFooter'>
      <span>Komentarzy: {isNaN(props.commentCount) ? '?' : props.commentCount}</span>
      <span>
        <a href={props.source} className='memeLink' target='_blank' rel='noopener noreferrer'>
          Źródło
        </a>
      </span>
    </div>
  )
}

export { MemeFooter }
