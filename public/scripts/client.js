/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
//pass the tweet date instead of 'new DATE'
//Creates the time element of the tweet
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
$(document).ready(function () {
  //Loops through tweets, calls createTweetElement for each tweet, takes return value and appends it to the tweets container.
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      $(".singleTweet").prepend(createTweetElement(tweet));
    }
  };

  //These are the properties that will be rendered to the page
  const createTweetElement = function (tweet) {
    const today = new Date();
    const tweetDate = new Date(tweet.created_at);
    const time = Math.floor((today - tweetDate) / (1000 * 60 * 60 * 24));
    const htmlElem = `
    <article class='tweetContainer'>
      <header>
        <div>
          <img src="${tweet.user.avatars}">
          <span class="name">${tweet.user.name}</span>
        </div>
        <span class="handle">${tweet.user.handle}</span>
      </header>
      <p class="tweeted">${escape(tweet.content.text)}</p>
      <footer>
        <span class="timeSince">${time} days ago</span>
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

  // This will load tweets from the database and return errors when needed
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      dataType: "JSON",
      method: "GET",
      success: (database) => {
        renderTweets(database);
      },
      error: () => {
        $("#error").text("There was a problem with the ajax request");
        $("#error").slideDown();
        evt.preventDefault();
      },
    });
  };
  $("#error").hide();

  $("#tweetForm").on("submit", function (evt) {
    $("#error").slideUp();
    numOfChars = $(this).find("textarea").val().length;
    if (numOfChars === 0) {
      $("#error").text("Cannot make an empty tweet");
      $("#error").slideDown();
      evt.preventDefault();
    } else if (numOfChars > 140) {
      $("#error").text("Yap Yap Yap... less characters please!");
      $("#error").slideDown();
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
          $("#error").slideDown();
          evt.preventDefault();
        },
      });
      $("#tweetText").val("");
      $(".counter").text(140);
    }
  });

  $("#writeTweet").on("click", () => {
    if ($(".newTweet:hidden").length) {
      $(".newTweet").slideDown();
      $(".newTweet").find("textarea").focus();
    } else $(".newTweet").slideUp();
  });

  loadTweets();
});
