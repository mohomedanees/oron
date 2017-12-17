/**
* Swipe
*/

export default function() {
  var swipeElement = $('.swiper');
  var screenWidth = $(window).width();

  if(screenWidth <= 768) {
    $(swipeElement).each(function() {
      $(".swiper").swipe({
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          $(this).addClass('swipe-active');
        },

        swipeRight:function(event, direction, distance, duration, fingerCount) {
          $(this).removeClass('swipe-active');
        },
        threshold:0
      });
    });
  }
}