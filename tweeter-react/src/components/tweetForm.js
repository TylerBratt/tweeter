import React, { useState } from 'react';
import './tweetForm.css'

export const TweetForm = (props) => {
  const { addNewTweet } = props
  const [tweetText, setTweetText] = useState('')
  const tweetRemainingLength = 140 - tweetText.length
  const outputStyle = {color:tweetRemainingLength >= 0 ? "black" : "red"}
  
  const submitTweet = event => {
    event.preventDefault()
    if(tweetRemainingLength >= 0 && tweetRemainingLength< 140) {
      addNewTweet(tweetText)
      setTweetText('')

    }
  }
  
  return(
    <section class="newTweet">
        <div id="error"></div>
        <form onSubmit={submitTweet} id="tweetForm" className="tweetForm" action="POST" method="/tweets">
          <textarea value={tweetText} onChange={event => setTweetText(event.target.value)} name="text" id="tweetText" placeholder="What are you humming about?"></textarea>
          <div className="numberSubmit">
            <button type="submit">Tweet</button>
            <output style={outputStyle} name="counter" className="counter" for="tweetText">{140 - tweetText.length}</output>
          </div>
        </form>
      </section>
  )
}