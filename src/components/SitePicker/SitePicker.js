import React from 'react';

class SiteButton extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.props.onSiteSelected(this.props.site)
  }

  render() {
    return <button
      value={this.props.site}
      onClick={this.handleClick}>
      {this.props.site.name}
    </button>
  }
}

class SitePicker extends React.Component {
  render() {
    const sites = this.props.sites
    let siteButtons = []

    sites.forEach(site => {
      siteButtons.push(
        <SiteButton
          key={site.url}
          site={site}
          onSiteSelected={this.props.onSiteSelected}
        />
      )
    })

    return <div>{siteButtons}</div>
  }
}

export default SitePicker