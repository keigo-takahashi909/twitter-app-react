import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import Search from '@mui/icons-material/Search'
import React from 'react'
import "./Widgets.css"

const Widgets = () => {
  return (
    <div className="widgets">
        <div className="widgets--input">
            <Search className="widgets--searchIcon" />
            <input placeholder="キーワード検索" type="text"></input>
        </div>
        <div className="widgets--widgetContainer">
            <h2>いま、どうしてる？</h2>
            { /* ライブラリを追加 */ }
            <TwitterTweetEmbed tweetId={"1711498886265659797"}/>
            <TwitterTimelineEmbed sourceType="profile" screenName="X" options={{height: 400}} />
            <TwitterShareButton url={"https://twitter.com/reinosuke123"} options={{text: "React学習中", via: "test"}} />
        </div>
    </div>
  )
}

export default Widgets