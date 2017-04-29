$(function() {
  $('button.switch').on('click', function(){
    $(this).toggleClass('on');
    $(this).toggleClass('off');

    $('body').toggleClass('light');
    $('body').toggleClass('dark');

    if ($(this).hasClass('on')) {
      $('.status').text('It\'s so bright in here!');
    } else {
      $('.status').text('Hey, who turned off the lights?');
    }
  });

});
