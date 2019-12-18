import React from 'react';
import './Button.css'

class DataButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onClick(event, this.props.data)
  }

  render() {
    return (
      <button className='button' onClick={this.handleClick}>
      {this.props.text}
      </button>
    )
  }
}

export default DataButton