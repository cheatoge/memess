import React from 'react';
import logo from '../../logo.svg';
import SitePicker from '../SitePicker/SitePicker.js'
import MemesPage from '../MemesPage/MemesPage.js';
import { API_URL, HOME_SITE, SITES } from './Config';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      site: HOME_SITE,
      memes: []
    }

    this.fetchMemesData = this.fetchMemesData.bind(this)
    this.onHomeSiteSelected = this.onHomeSiteSelected.bind(this)
    this.onMemesSiteSelected = this.onMemesSiteSelected.bind(this)
    this.onSiteSelected = this.onSiteSelected.bind(this)
  }

  async fetchMemesData(url) {
    const memesUrl = `${API_URL}/${url}`
    const json = await fetch(memesUrl)
      .then(response => {
        return response.json()
      })

    return json
  }

  onHomeSiteSelected() {
    this.setState({
      site: HOME_SITE,
      memes: null
    })
  }

  onMemesSiteSelected(site) {
    const json = this.fetchMemesData(site.url)
      .then(json => {
        this.setState({
          site: site,
          memes: json.memes
        })
      })
  }

  onSiteSelected(site) {
    if (site.url == HOME_SITE.url) {
      this.onHomeSiteSelected()
    } else {
      this.onMemesSiteSelected(site)
    }
  }

  render() {
    const currentUrl = this.state.site.url

    return (
      <>
        <SitePicker
          sites={SITES}
          onSiteSelected={this.onSiteSelected}
        />
        {
          currentUrl.length > 0 &&
          <MemesPage
            memes={this.state.memes}
            siteName={this.state.site.name}
          />
        }
      </>
    )
  }
}

export default App;
