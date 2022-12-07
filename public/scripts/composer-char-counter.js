$(document).ready(function() {
  let counter = 140;
  $("#tweet-text").on('input', function() {
    let length = $("#tweet-text").val().length;

    $(this).next().children('output').text(counter - length);

    if ($(this).next().children('output').text() < 0) {
      $(this).next().children('output').addClass('character-exceeded');
    } else {
      $(this).next().children('output').removeClass('character-exceeded');
    }
  });
});