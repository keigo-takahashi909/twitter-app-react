import React from 'react'
import "./Timeline.css"
import TweetBox from './TweetBox'
import Post from './Post'

function Timeline() {
  return (
    <div className="timeline">
        {/* Header */}
        <div className="timeline--header">
            <h2>ホーム</h2>
        </div>
        {/* TweetBox */}
        <TweetBox />
        {/* Post */}
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Timeline