import React from 'react';

const MemeFooter = (props) => {
  let commentCount = '?'
  if (props.commentCount != null && !isNaN(props.commentCount)) {
    commentCount = props.commentCount
  }

  return (
    <div className='memeBlock memeFooter'>
      <span>Komentarzy: {commentCount}</span>
      <span>
        <a href={props.source} className='memeLink' target='_blank' rel='noopener noreferrer'>
          Źródło
        </a>
      </span>
    </div>
  )
}

export { MemeFooter }
