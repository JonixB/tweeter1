$(document).ready(function() {
  $(".tweet").hover(function(){
    $(this).css('box-shadow', '7px 7px 2px 1px rgba(0, 0, 255, .2)');
    }, function(){
    $(this).css('box-shadow', '0px 0px 0px black');
  });

  $(".fa-flag").hover(function(){
    $(this).css('color', '#cab000');;
    }, function(){
    $(this).css('color', '#4056A1');
  });

  $(".fa-retweet").hover(function(){
    $(this).css('color', '#cab000');
    }, function(){
    $(this).css('color', '#4056A1');
  });

  $(".fa-heart").hover(function(){
    $(this).css('color', '#cab000');
    }, function(){
    $(this).css('color', '#4056A1');
  });
});