import React from 'react';

class Meme extends React.Component {
  render() {
    const meme = this.props.meme
    return (
      <div>
        <h3>{meme.title}</h3>
      </div>
    )
  }
}

export default Meme;