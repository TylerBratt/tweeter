/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  //pass the tweet date instead of 'new DATE'
  //Creates the time element of the tweet
  $(".timeSince").text(timeago.format(new Date()));

  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense, donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  //Loops through tweets, calls createTweetElement for each tweet, takes return value and appends it to the tweets container.
  const renderTweets = function (tweets) {
    // console.log(tweets);
    for (const tweet of tweets) {
      $(".tweetContainer").prepend(createTweetElement(tweet));
      console.log(tweets, tweet);
    }
  };

  //These are the properties that will be rendered to the page
  const createTweetElement = function (tweet) {
    const { name, avatar, handle } = tweet.user;
    const { text } = tweet.content.text;
    const { created_at } = tweet;
  };
  renderTweets(data);
});
