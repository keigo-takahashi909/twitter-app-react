import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react'
import "./TweetBox.css";
import { addDoc, collection } from "firebase/firestore"; 
import db from "../../firebase"

const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const inputText = (e) => setTweetMessage(e.target.value);
  const inputImage = (e) => setTweetImage(e.target.value);

  const sendTweet = (e) => {
    e.preventDefault();
    addDoc(collection(db, "posts"), {
      displayName: "Reactアプリ",
      username: "山田太郎",
      verified: true,
      text: tweetMessage,
      avatar: "http://shincode.info/wp-content/uploads/2021/12/icon.png",
      image: tweetImage
    })

    setTweetMessage("");
    setTweetImage("");
  }

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox--input">
                <Avatar />
                <input value={tweetMessage} placeholder="いまどうしてる？" type="text" onChange={inputText}></input>
            </div>
            <input value={tweetImage} className="tweetBox--imageInput" placeholder="画像のURLを入力してください" type="text" onChange={inputImage}></input>
            <Button className="tweetBox--tweetButton" type="submit" onClick={sendTweet}>ツイートする</Button>
        </form>
    </div>
  )
};

export default TweetBox