import React from 'react'

const MemeHeader = (props) => {
  return (
    <a href={props.href} target='_blank' rel="noopener noreferrer">
      <h3 className='memeHeader memeBlock memeLink'>{props.children}</h3>
    </a>
  )
}

export { MemeHeader }