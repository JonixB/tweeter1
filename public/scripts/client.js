/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  $(".error").hide();

  //escape function to prevent XSS
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (tweetObj) {
    const $tweet = $(`<article class="tweet">
      <header class="tweet-header">
        <img class="user-avatar" src="${tweetObj.user.avatars}" alt="${tweetObj.user.name}">
        <div>
          <h4>${tweetObj.user.name}</h4>
          <h4 id="username">${tweetObj.user.handle}</h4>
        </div>
      </header>

        <div class="tweet-body">
          <span>${escape(tweetObj.content.text)}</span>
        </div>

      <footer class="tweet-footer">
        <h5>${timeago.format(tweetObj.created_at)}</h5>

        <p>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </p>
      </footer>
    </article>`);
    return $tweet;
  };

  const renderTweets = function (tweets) {
    $('.tweet-container').empty();
    for (const tweet of tweets) {
      $('.tweet-container').prepend(createTweetElement(tweet));
    }
  }

  $('form').on('submit', function (event) {
    event.preventDefault();

    if ($("#tweet-text").val().length < 1) {
      $(".message").text('Cannot post an emtpy tweet. Please type something.')
      $(".error").slideDown(1000, function () {
        setTimeout(function () {
          $('.error').fadeOut('fast');
        }, 5000);
      });
    } else if ($("#tweet-text").val().length > 140) {
      $(".message").text('Exceeded maximum number of characters allowed')
      $(".error").slideDown(1000, function () {
        setTimeout(function () {
          $('.error').fadeOut('fast');
        }, 5000);
      });
    } else {
      $.ajax({
        url: '/tweets/',
        method: 'POST',
        data: $(this).serialize()
      })

        .then(() => {
          loadTweets();
          $("#tweet-text").val('');
        })
    }

  });

  const loadTweets = function () {
    $.ajax({
      url: '/tweets',
      method: 'GET',
    })

      .then((data) => {
        renderTweets(data);
      })

      .catch((err) => {
        console.log(err);
      });
  };
  loadTweets();
});