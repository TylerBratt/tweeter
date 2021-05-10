import React from 'react'
import { Tweets } from '../components/tweets'

export default { title :  'Tweet Container' }

export const emptyTweet = () => <Tweets />

export const poulatedTweet = () => {
  const tweets = [
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

  return <Tweets tweetData={tweets} />
}