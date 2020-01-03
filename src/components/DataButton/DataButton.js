import React from 'react'
import './DataButton.css'

class DataButton extends React.Component {
  handleClick = event => {
    this.props.onClick(event, this.props.data)
  }

  render() {
    return (
      <button className="data-button" onClick={this.handleClick}>
        {this.props.children}
      </button>
    )
  }
}

export { DataButton }
