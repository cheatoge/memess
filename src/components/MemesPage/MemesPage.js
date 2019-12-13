import React from 'react';
import Meme from '../Meme/Meme';

class MemesPage extends React.Component {
  render() {
    return (
      <div>
        {this.props.memes[0].title}
      </div>
    )
  }
}

export default MemesPage;