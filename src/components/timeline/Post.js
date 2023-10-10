import { ChatBubbleOutline, FavoriteBorder, PublishOutlined, Repeat, VerifiedUser } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import "./Post.css"

const Post = () => {
  return (
    <div className="post">
        <div className="post--avatar">
            <Avatar />
        </div>
        <div className="post--body">
            <div className="post--header">
                <div className="post--headerText">
                    <h3>
                        プログラミングチュートリアル
                        <span className="post--headerSpecial">
                            <VerifiedUser className="post--badge" />
                            @Test_User
                        </span>
                    </h3>
                </div>
                <div className="post--headerDescription">
                    <p>Reactアプリ</p>
                </div>
            </div>
            <img src="https://source.unsplash.com/random" alt=""/>
            <div className="post--footer">
                <ChatBubbleOutline fontSize="small" />
                <Repeat fontSize="small" />
                <FavoriteBorder fontSize="small" />
                <PublishOutlined fontSize="small" />
            </div>
        </div>
    </div>
  )
}

export default Post