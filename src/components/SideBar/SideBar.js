import React from 'react';
import DataButton from '../Button/DataButton.js'
import SitePicker from '../SitePicker/SitePicker.js'
import './SideBar.css'

class SideBar extends React.Component {
  render() {
    return (
      <div>
        <div
          className="sideBarBackground"
          onClick={this.props.onBackgroundClick}
        >
        </div>
        
        <div className="sideBar shadow">
          <div className="appName">MEMESS</div>
          <SitePicker
            onSiteSelected={this.props.onSiteSelected}
            sites={this.props.sites}
          />
        </div>
      </div>
    )
  }
}

export default SideBar