/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

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
          ${tweetObj.content.text}
        </div>

      <footer class="tweet-footer">
        <h5>${tweetObj.created_at}</h5>

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
    for (const tweet of tweets) {
      $('.container').append(createTweetElement(tweet));
    }
  }

  renderTweets(data);

  $('form').on('submit', function(event){
    event.preventDefault();

    $.ajax({
      url: '/tweets/',
      method: 'POST',
      data: $(this).serialize()
    })
  });

  const loadTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      data: $(this).serialize()

      .then((data) => {

      })

      .catch((err) => {

      })
    })
  }

});