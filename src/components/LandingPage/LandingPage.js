import React from 'react';
import GithubMark from '../SVG/GithubMark.js'
import './LandingPage.css'

class LandingPage extends React.Component {
  render() {
    return (
      <div className='block landingWrapper'>
        <div className='appName appNameBig'>MEMESS</div>
        <p className="textBlock centerText">
          Enjoy memes without loads of ads and annoying UI.
        </p>
        <p className="textBlock centerText">
          Created by <a href='https://github.com/cheatoge'>
            <span style={{padding: '0 3px 0 0'}}><GithubMark fill={'#FFF'} /></span><b>cheatoge</b>
          </a>.

          Original idea by <a href='https://github.com/pr0gramista'>
            <span style={{padding: '0 3px 0 0'}}><GithubMark fill={'#FFF'} /></span><b>pr0gramista</b>
          </a>.
        </p>
      </div>
    )
  }
}

export default LandingPage