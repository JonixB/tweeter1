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

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

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

    .then((data) => {

    })

    .catch((err) => {

    });
  });

});