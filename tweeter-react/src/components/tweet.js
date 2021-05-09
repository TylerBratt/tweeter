import React from 'react';
import './tweet.css'

export const Tweet = (props) => {

  const {name, handle, profile_image, text, date} = props
  return(
    <article className="tweetContainer">
          <header>
            <div>
              <img src={profile_image} />
              <span className="name">{name}</span>
            </div>
            <span className="handle">{handle}</span>
          </header>
          <p className="tweeted">{text}</p>
          <footer>
            <span className="timeSince">{date}</span>
            <div>
              <span className="flag"><i className="fas fa-flag"></i></span>
              <span className="retweet"><i className="fas fa-retweet"></i></span>
              <span className="heart"><i className="fas fa-heart"></i></span>
            </div>
          </footer>
        </article>
  )
}