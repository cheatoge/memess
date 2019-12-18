import React from 'react';
import './HamburgerMenu.css'

class HamburgerMenu extends React.Component {
  handleClick = (event) => {
    this.props.onClick(event)
  }

  render() {
    return (
      <button className='hamburgerMenu' onClick={this.handleClick}>
        <div>
          <div className='hamburgerBar'></div>
          <div className='hamburgerBar'></div>
          <div className='hamburgerBar'></div>
        </div>
      </button>
    )
  }
}

export default HamburgerMenu