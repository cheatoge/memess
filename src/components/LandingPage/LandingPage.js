import React from 'react'
import { GithubMark } from '../SVG'
import { SitePicker } from '../SitePicker'
import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div className='block landingWrapper'>
        <div className='appName appNameBig'>MEMESS</div>
        <p className="textBlock centerText">
          Enjoy memes without loads of ads and annoying UI.
        </p>

        <div className="sitesBlock">
          <SitePicker
            sites={this.props.sites}
            onSiteSelected={this.props.onSiteSelected}
          />
        </div>

        <p className="textBlock centerText">
          Created by <a href='https://github.com/cheatoge'>
            <span className='authors'>
              <span style={{ padding: '0 3px 0 0' }}><GithubMark fill={'#FFF'} /></span><b>cheatoge</b>
            </span>
          </a>.

          Original idea by <a href='https://github.com/pr0gramista'>
            <span className='authors'>
              <span style={{ padding: '0 3px 0 0' }}><GithubMark fill={'#FFF'} /></span><b>pr0gramista</b>
            </span>
          </a>.
        </p>
      </div>
    )
  }
}

export { LandingPage }