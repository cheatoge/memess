import React from 'react';

class TextMeme extends React.Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    )
  }
}

export default TextMeme
