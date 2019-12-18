import React from 'react';
import logo from '../../logo.svg';
import DataButton from '../Button/DataButton.js'
import SitePicker from '../SitePicker/SitePicker.js'
import MemesPage from '../MemesPage/MemesPage.js';
import HamburgerMenu from '../Button/HamburgerMenu.js'
import { API_URL, HOME_SITE, SITES } from './Config';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      site: HOME_SITE,
      showSideBar: false,
      memes: null,
      nextPageUrl: null
    }

    this.fetchMemesData = this.fetchMemesData.bind(this)
    this.onHomeSiteSelected = this.onHomeSiteSelected.bind(this)
    this.onMemesSiteSelected = this.onMemesSiteSelected.bind(this)
    this.onSiteSelected = this.onSiteSelected.bind(this)
    this.onNextPageRequested = this.onNextPageRequested.bind(this)
    this.onFetchError = this.onFetchError.bind(this)
  }

  onFetchError(error) {
    this.setState({ error: 'Błąd podczas pobierania memów' })
    console.log(error)
  }

  async fetchMemesData(url) {
    const memesUrl = `${API_URL}/${url}`
    const json = await fetch(memesUrl)
      .then(response => {
        return response.json()
      }).catch(this.onFetchError)

    if (!json || !json.memes) {
      this.onFetchError('Invalid JSON response')
    }

    return json
  }

  onHomeSiteSelected() {
    this.setState({
      site: HOME_SITE,
      memes: null,
      nextPageUrl: null
    })
  }

  onMemesSiteSelected(site) {
    this.fetchMemesData(site.url)
      .then(json => {
        if (!json) { return }

        this.setState({
          site: site,
          memes: json.memes,
          nextPageUrl: json.next_page_url
        })
      })
  }

  onSiteSelected(event, site) {
    this.setState({showSideBar: false})

    if (site.url == HOME_SITE.url) {
      this.onHomeSiteSelected()
    } else {
      this.onMemesSiteSelected(site)
    }
  }

  onNextPageRequested(event, url) {
    this.fetchMemesData(url)
      .then(json => {
        if (!json) { return }

        this.setState({
          memes: json.memes,
          nextPageUrl: json.next_page_url
        })
      })
  }

  toggleSideBar = () => {
    this.setState(state => {
      return {showSideBar: !state.showSideBar}
    })
  }

  render() {
    const currentUrl = this.state.site.url
    const nextPageUrl = this.state.nextPageUrl

    return (
      <>
        <HamburgerMenu onClick={this.toggleSideBar}/>
        {
          this.state.showSideBar &&
          <SitePicker
            sites={SITES}
            onSiteSelected={this.onSiteSelected}
          />
        }
        {
          currentUrl.length > 0 &&
          <MemesPage
            memes={this.state.memes}
            siteName={this.state.site.name}
          />
        }
        {
          nextPageUrl != null &&
          <DataButton
            text="Następna strona"
            onClick={this.onNextPageRequested}
            data={this.state.nextPageUrl}
          />
        }
        {
          this.state.error != null &&
          <div>
            <p>{this.state.error}</p>
            <button onClick={() => { this.setState({ error: null }) }}>
              OK
            </button>
          </div>
        }
      </>
    )
  }
}

export default App;
