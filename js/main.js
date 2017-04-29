$(function() {
  $('button.switch').on('click', function(){
    $(this).toggleClass('on');
    $(this).toggleClass('off');

    $('body').toggleClass('light');
    $('body').toggleClass('dark');
  });

});
