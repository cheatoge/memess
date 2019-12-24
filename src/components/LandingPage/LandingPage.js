import React from 'react'
import { GithubMark } from '../SVG'
import { SitePicker } from '../SitePicker'
import { getCSSVariable } from '../../util/utility'
import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div className="landing-wrapper">
        <div className="app-name app-name-big">MEMESS</div>
        <p className="landing-paragraph">
          Enjoy memes without loads of ads and annoying UI.
        </p>

        <div className="landing-sites-container">
          <SitePicker
            sites={this.props.sites}
            onSiteSelected={this.props.onSiteSelected}
          />
        </div>

        <p className="landing-paragraph">
          Created by{' '}
          <a href="https://github.com/cheatoge">
            <span className="landing-authors">
              <span className="landing-icon-wrapper">
                <GithubMark fill={getCSSVariable('--color-primary')} />
              </span>
              <b>cheatoge</b>
            </span>
          </a>
          . Original idea by{' '}
          <a href="https://github.com/pr0gramista">
            <span className="landing-authors">
              <span className="landing-icon-wrapper">
                <GithubMark fill={getCSSVariable('--color-primary')} />
              </span>
              <b>pr0gramista</b>
            </span>
          </a>
          .
        </p>
      </div>
    )
  }
}

export { LandingPage }
