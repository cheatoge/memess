import React from 'react';

class DataButton extends React.Component {
  handleClick = (event) => {
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

export { DataButton }