import React from 'react';
import './navigation.css'

export const Navigation = () => {
  
  return(
    <nav>
      <span>tweeter</span>
      <div id="writeTweet"
        >Write a new tweet
        <i className="fas fa-angle-double-down"></i>
      </div>
    </nav>
  )
}