import React from 'react';
import DataButton from '../Button/DataButton.js'
import './SitePicker.css'

class SitePicker extends React.Component {
  render() {
    const sites = this.props.sites
    let siteButtons = []

    sites.forEach(site => {
      siteButtons.push(
        <DataButton 
          key={site.url}
          data={site}
          onClick={this.props.onSiteSelected}
          text={site.name}
        />
      )
    })

    return (
      <div>
        <div
          className="sitePickerBackground"
          onClick={this.props.onBackgroundClick}
        >
        </div>
        
        <div className="sitePicker shadow">
          <div className="appName">MEMESS</div>
          {siteButtons}
        </div>
      </div>
    )
  }
}

export default SitePicker