import React from 'react';
import { SitePicker } from '../SitePicker'
import './SideBar.css'

class SideBar extends React.Component {
  render() {
    return (
      <div className='side-bar-wrapper'>
        <div
          className="side-bar-tap-background"
          onClick={this.props.onBackgroundClick}
        >
        </div>

        <div className='side-bar'>
          <div className='app-name'>MEMESS</div>
          <SitePicker
            onSiteSelected={this.props.onSiteSelected}
            sites={this.props.sites}
          />
        </div>
      </div>
    )
  }
}

export { SideBar }