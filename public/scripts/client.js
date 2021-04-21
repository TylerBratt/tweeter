/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//pass the tweet date instead of 'new DATE'
//Creates the time element of the tweet

$(document).ready(function () {
  //Loops through tweets, calls createTweetElement for each tweet, takes return value and appends it to the tweets container.
  const renderTweets = function (tweets) {
    // console.log(tweets);
    for (const tweet of tweets) {
      $(".singleTweet").prepend(createTweetElement(tweet));
    }
  };

  //These are the properties that will be rendered to the page
  const createTweetElement = function (tweet) {
    const htmlElem = `
    <article class='tweetContainer'>
      <header>
        <div>
          <img src="${tweet.user.avatars}">
          <span class="name">${tweet.user.name}</span>
        </div>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <p class="tweeted">${tweet.content.text}</p>
      <footer>
        <span class="timeSince">${tweet.created_at}</span>
        <div>
          <span class="flag"><i class="fas fa-flag"></i></span>
          <span class="retweet"><i class="fas fa-retweet"></i></span>
          <span class="heart"><i class="fas fa-heart"></i></span>
        </div>
      </footer>
    </article>
    `;

    return htmlElem;
  };

  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      dataType: "JSON",
      method: "GET",
      success: (database) => {
        renderTweets(database);
      },
    });
  };

  $("#tweetForm").on("submit", function (evt) {
    numOfChars = $(this).find("textarea").val().length;
    if (numOfChars === 0) {
      $("#error").text("Cannot make an empty tweet");
      evt.preventDefault();
    } else if (numOfChars > 140) {
      $("#error").text("Yap Yap Yap... less characters please!");
      evt.preventDefault();
    } else {
      evt.preventDefault();
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: $(this).find("textarea").serialize(),
        success: () => {
          loadTweets();
        },
        error: () => {
          $("#error").text("There was a problem with the ajax request");
          evt.preventDefault();
        },
      });
      $("#tweetText").val("");
      $(".counter").text(140);
    }
  });

  //aks about the correct route

  loadTweets();
  $(".timeSince").text(timeago.format(new Date()));
});
