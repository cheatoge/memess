import React from 'react'
import { DataButton } from '../DataButton'
import { SideBar } from '../SideBar'
import { LandingPage } from '../LandingPage'
import { MemesPage } from '../MemesPage'
import { HamburgerMenu } from '../HamburgerMenu'
import { ErrorWindow } from '../ErrorWindow'
import { API_URL, HOME_PAGE, SITES, DESKTOP_VIEWPORT_SIZE } from './Config'
import { getViewportWidth, scrollToTop } from '../../util/utility.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      site: HOME_PAGE,
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
    const memesUrl = `${API_URL}123/${url}`
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
      site: HOME_PAGE,
      memes: null,
      nextPageUrl: null
    })
  }

  onMemesSiteSelected = (site) => {
    this.fetchMemesData(site.url)
      .then(json => {
        if (!json) { return }

        scrollToTop()
        this.setState({
          site: site,
          memes: json.memes,
          nextPageUrl: json.next_page_url
        })
      })
  }

  onSiteSelected = (event, site) => {
    scrollToTop()

    if (getViewportWidth() < DESKTOP_VIEWPORT_SIZE) {
      this.setState({ showSideBar: false })
    }

    if (site.url === HOME_PAGE.url) {
      this.onHomeSiteSelected()
    } else {
      this.onMemesSiteSelected(site)
    }
  }

  onNextPageRequested = (event, url) => {
    scrollToTop()
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
          <SideBar
            sites={[HOME_PAGE, ...SITES]}
            onSiteSelected={this.onSiteSelected}
            onBackgroundClick={this.toggleSideBar}
          />
        }
        <div className="wrapper">
          {
            !this.state.site.url &&
            <LandingPage
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
            <ErrorWindow onClick={this.clearError}>
              {this.state.error}
            </ErrorWindow>
          }
        </div>
        <HamburgerMenu onClick={this.toggleSideBar} />
      </>
    )
  }
}

export default App;
