import React from 'react'
import { DataButton } from '../DataButton'

class SitePicker extends React.Component {
  render() {
    const sites = this.props.sites
    let siteButtons = sites.map(site => {
      return (
        <DataButton
          key={site.url}
          data={site}
          onClick={this.props.onSiteSelected}
          text={site.name}
        />
      )
    })

    return <>{siteButtons}</>
  }
}

export { SitePicker }
