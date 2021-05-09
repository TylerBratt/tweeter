import React, { useState } from 'react';
import './App.css';
import {Navigation} from './components/navigation'
import {Profile} from './components/profile'
import {TweetForm} from './components/tweetForm'
import {Tweet} from './components/tweet'

const initialTweetData = [
  {
    name:"ThrillHouse",
    handle:"@FalloutBoy",
    profile_image:"https://i.imgur.com/nlhLi3I.png",
    text:"Watch Out, Radioactive Man!",
    date: "10 days ago"
  },
  {
    name:"Hans Moleman",
    handle:"@theRealMoleman",
    profile_image:"https://i.imgur.com/nlhLi3I.png",
    text:"I was saying boo-urns",
    date: "3 days ago"
  }
]


function App() {
  const [tweetData, setTweetData] = useState(initialTweetData)

  const tweets = tweetData.map((tweetData, index) => {
    return <Tweet key={index} name={tweetData.name} handle ={tweetData.handle} profile_image={tweetData.profile_image} text={tweetData.text} date={tweetData.date}/>
  })

  const addNewTweet = (text) =>{
    const newTweet = {
      name:"ThrillHouse",
      handle:"@FalloutBoy",
      profile_image:"https://i.imgur.com/nlhLi3I.png",
      text,
      date: "2 days ago"
    }
    setTweetData([newTweet, ...tweetData])
  }
  return (
    <div className="App">
      <Navigation />
      <Profile />
      <main className='container'>
      <TweetForm  addNewTweet={addNewTweet}/>
      <section className="tweets">
        {tweets}
      </section>
      </main>
    </div>
  );
}

export default App;
