import React from 'react'
import { Tweet } from '../components/tweet'

export default { title : 'Singular Tweet' }

export const emptyTweet = () => <Tweet />

export const poulatedTweet = () => {
  const singleTweet = {
    name:"ThrillHouse",
    handle:"@FalloutBoy",
    profile_image:"https://i.imgur.com/nlhLi3I.png",
    text:"Watch Out, Radioactive Man!",
    date: "10 days ago"
  }

  return <Tweet { ...singleTweet} />
}