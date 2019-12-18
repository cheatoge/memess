import React from 'react';
import './TextMeme.css'

class TextMeme extends React.Component {
  render() {
    return (
      <div className='textMeme'>
        {this.props.text}
      </div>
    )
  }
}

export default TextMeme
