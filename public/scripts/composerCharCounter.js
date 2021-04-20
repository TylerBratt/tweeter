$(document).ready(function () {
  $("#tweetText").on("keyup", function () {
    const result = 140 - this.value.length;
    const count = $("output.counter");
    count.text(result);

    if (result < 0) {
      count.addClass("overCount");
    } else {
      count.removeClass("overCount");
    }
  });
});
