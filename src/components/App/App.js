import React from 'react';
import logo from '../../logo.svg';
import MemesPage from '../MemesPage/MemesPage.js';
import {HOME_SITE, SITES} from './Config';


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
      key={this.props.site.url}
      value={this.props.site}
      onClick={this.handleClick}>
      {this.props.site.name}
    </button>
  }
}

class SitePicker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const sites = this.props.sites
    let siteButtons = []

    sites.forEach(site => {
      siteButtons.push(
        <SiteButton
          site={site}
          onSiteSelected={this.props.onSiteSelected}
        />
      )
    })
    
    return <div>{siteButtons}</div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      site: HOME_SITE,
      memes: []
    }

    this.fetchMemes = this.fetchMemes.bind(this)
    this.onSiteSelected = this.onSiteSelected.bind(this)
  }

  async fetchMemes(url) {
    console.log("Fetching memes")
    const json = await fetch("http://api.12345.pl/jbzd")
      .then(response => {
        return response.json()
      })

    return json
  }

  onSiteSelected(site) {
    const memes = this.fetchMemes(site.url)
    this.setState({
      site: site,
      memes: memes
    })
  }

  render () {
    const currentUrl = this.state.site.url

    return (
      <>
        <SitePicker 
          sites={SITES}
          onSiteSelected={this.onSiteSelected}
        />
        {
          currentUrl.length > 0 &&
          <MemesPage memes={this.state.memes}/>
        }
      </>
    )
  }
}

export default App;
