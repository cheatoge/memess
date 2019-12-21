import React from 'react'
import './ErrorWindow.css'

class ErrorWindow extends React.Component {
  render() {
    return (
      <div className='errorWindow'>
        <p className='errorWindowText'>{this.props.error}</p>
        {
          !this.props.hideCloseButton &&
          <button className='button button-white' style={{width: '200px'}} onClick={this.props.onClick}>
            <b>OK</b>
          </button>
        }
      </div>
    )
  }
}

export default ErrorWindow;
