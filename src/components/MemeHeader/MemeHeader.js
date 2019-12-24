import React from 'react'
import './MemeHeader.css'

const MemeHeader = props => {
  return (
    <a href={props.href} target="_blank" rel="noopener noreferrer">
      <h3 className="meme-header">{props.children}</h3>
    </a>
  )
}

export { MemeHeader }
