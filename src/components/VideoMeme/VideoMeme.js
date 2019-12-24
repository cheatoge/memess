import React from 'react'
import './VideoMeme.css'

const VideoMeme = props => {
  const content = props.content

  return (
    <div>
      <video
        className="video"
        src={content.url}
        preload="metadata"
        muted
        controls
      />
    </div>
  )
}

export { VideoMeme }
