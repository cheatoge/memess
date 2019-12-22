import React from 'react';
import './TextMeme.css'

const TextMeme = (props) => {
  const content = props.content
  let textSections = content.text.split('\n')
  textSections = textSections.map((section, index) => {
    return (
      <span key={index}>
        {section}
        <br />
      </span>
    )
  })

  return (
    <div className='textMeme'>
      {textSections}
    </div>
  )
}

export { TextMeme }