import React from 'react'
import logo from '../../logo.svg'
import DataButton from '../Button/DataButton.js'
import SitePicker from '../SitePicker/SitePicker.js'
import MemesPage from '../MemesPage/MemesPage.js'
import HamburgerMenu from '../Button/HamburgerMenu.js'
import ErrorWindow from '../Error/ErrorWindow.js'
import { API_URL, HOME_SITE, SITES, DESKTOP_VIEWPORT_SIZE } from './Config'
import { getViewportWidth } from '../../util/utility.js'
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
  }

  componentDidMount() {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    this.setState(state => {
      const isMobile = getViewportWidth() < DESKTOP_VIEWPORT_SIZE

      return { showSideBar: isMobile ? state.showSideBar : true }
    })
  }

  onFetchError = (error) => {
    this.setState({ error: 'Wystąpił błąd podczas pobierania memów' })
    console.log(error)
  }

  fetchMemesData = async (url) => {
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

  onHomeSiteSelected = () => {
    this.setState({
      site: HOME_SITE,
      memes: null,
      nextPageUrl: null
    })
  }

  onMemesSiteSelected = (site) => {
    this.fetchMemesData(site.url)
      .then(json => {
        if (!json) { return }

        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          site: site,
          memes: json.memes,
          nextPageUrl: json.next_page_url
        })
      })
  }

  onSiteSelected = (event, site) => {
    if (getViewportWidth() < DESKTOP_VIEWPORT_SIZE) {
      this.setState({ showSideBar: false })
    }

    if (site.url == HOME_SITE.url) {
      this.onHomeSiteSelected()
    } else {
      this.onMemesSiteSelected(site)
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  onNextPageRequested = (event, url) => {
    this.fetchMemesData(url)
      .then(json => {
        if (!json) { return }

        window.scrollTo({ top: 0, behavior: 'smooth' })
        this.setState({
          memes: json.memes,
          nextPageUrl: json.next_page_url
        })
      })
  }

  toggleSideBar = () => {
    this.setState(state => {
      return { showSideBar: !state.showSideBar }
    })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const currentUrl = this.state.site.url
    const nextPageUrl = this.state.nextPageUrl

    return (
      <>
        {
          this.state.showSideBar &&
          <SitePicker
            sites={SITES}
            onSiteSelected={this.onSiteSelected}
            onBackgroundClick={this.toggleSideBar}
          />
        }
        <div className="wrapper">
          {
            currentUrl.length > 0 &&
            <MemesPage
              memes={this.state.memes}
              siteName={this.state.site.name}
            />
          }
          {
            nextPageUrl != null &&
            <div className="nextPageWrapper">
              <DataButton
                text="Następna strona"
                onClick={this.onNextPageRequested}
                data={this.state.nextPageUrl}
              />
            </div>
          }
          {
            this.state.error != null &&
            <ErrorWindow
              error={this.state.error}
              onClick={this.clearError}
            />
          }
        </div>
        <HamburgerMenu onClick={this.toggleSideBar} />
      </>
    )
  }
}

export default App;
