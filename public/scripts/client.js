/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $(".timeSince").text(timeago.format(new Date()));
  //pass the tweet date instead of 'new DATE'
});
