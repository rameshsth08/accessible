$(function(){
    var manageBodyPadding = function() {
        if ($(window).width() <= 992) {
//toggle-menu
$('.js-menu, .nav-overlay').click(function() {
  $('.navigation').toggleClass('active');
  $('.js-menu').toggleClass('active');
  $('body').toggleClass('active');
  $('.nav-overlay').toggleClass('overlay-open');
  $('#searchbar').val('');
  $('.navigation-item').each(function(i) {
      var current = $(this);
      if ($('.navigation').hasClass('active')) {
          setTimeout(function() {
              current.delay(100).addClass('animate__animated animate__fadeInRightBig').removeClass('none');
          }, 100 * i);
      } else {
          $(current).removeClass('animate__animated animate__fadeInRightBig').addClass('none');
          setTimeout(function() {
              current.removeClass('animate__animated animate__fadeInRightBig').addClass('none');
          }, 100);
      }
  });
});
}
    }

manageBodyPadding();
$(window).bind("resize orientationchange", function() {
    manageBodyPadding();
});

});
