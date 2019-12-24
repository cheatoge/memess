import React from 'react'
import './HamburgerMenu.css'

class HamburgerMenu extends React.Component {
  handleClick = event => {
    this.props.onClick(event)
  }

  render() {
    return (
      <button
        className="hamburger-menu hamburger-menu-shadow"
        onClick={this.handleClick}
      >
        <div>
          <div className="hamburger-menu-bar"></div>
          <div className="hamburger-menu-bar"></div>
          <div className="hamburger-menu-bar"></div>
        </div>
      </button>
    )
  }
}

export { HamburgerMenu }
