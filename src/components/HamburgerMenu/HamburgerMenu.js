import React from 'react';
import './HamburgerMenu.css'

class HamburgerMenu extends React.Component {
  handleClick = (event) => {
    this.props.onClick(event)
  }

  render() {
    return (
      <button className='hamburgerMenu shadow' onClick={this.handleClick}>
        <div>
          <div className='hamburgerBar'></div>
          <div className='hamburgerBar'></div>
          <div className='hamburgerBar'></div>
        </div>
      </button>
    )
  }
}

export { HamburgerMenu }