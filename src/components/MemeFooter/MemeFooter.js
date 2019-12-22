import React from 'react'
import './MemeFooter.css'

const MemeFooter = (props) => {
  let commentCount = '?'
  if (props.commentCount != null && !isNaN(props.commentCount)) {
    commentCount = props.commentCount
  }

  return (
    <div className='meme-footer'>
      <span>Komentarzy: {commentCount}</span>
      <span>
        <a href={props.source} target='_blank' rel='noopener noreferrer'>
          Źródło
        </a>
      </span>
    </div>
  )
}

export { MemeFooter }
