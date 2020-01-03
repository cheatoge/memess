import React from 'react'
import { DataButton } from '../DataButton'

class SitePicker extends React.Component {
  render() {
    const { sites } = this.props
    if (!sites) {
      return <></>
    }

    let siteButtons = sites.map(site => {
      return (
        <DataButton
          key={site.url}
          data={site}
          onClick={this.props.onSiteSelected}
        >
          {site.name}
        </DataButton>
      )
    })

    return <>{siteButtons}</>
  }
}

export { SitePicker }
