import React from 'react';
import './TextMeme.css'

class TextMeme extends React.Component {
  render() {
    let fragments = this.props.text.split('\n')
    fragments = fragments.map(fragment => {
      return (
        <>
          {fragment}
          <br />
        </>
      )
    })
    
    return (
      <div className='textMeme'>
        {fragments}
      </div>
    )
  }
}

export default TextMeme
