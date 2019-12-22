import React from 'react'
import './ErrorWindow.css'

class ErrorWindow extends React.Component {
  render() {
    return (
      <div className='error-window'>
        <p className='error-window-text'>{this.props.children}</p>
        {
          !this.props.hideCloseButton &&
          <button className='error-window-button' onClick={this.props.onClick}>
            <b>OK</b>
          </button>
        }
      </div>
    )
  }
}

export { ErrorWindow }
