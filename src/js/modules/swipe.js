/**
* Swipe
*/

export default function() {
  var swipeElement = $('.swiper');
  var screenWidth = $(window).width();

  if(screenWidth <= 768) {
    $(swipeElement).each(function() {
      $(".swiper").swipe({
        tap:function(event, target) {
          if($('.list').hasClass('list__grid')) {
            $(this).toggleClass('swipe-active');
          }
        },

        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          $(this).addClass('swipe-active');
        },

        swipeRight:function(event, direction, distance, duration, fingerCount) {
          $(this).removeClass('swipe-active');
        },

        threshold: 50
      });
    });
  }
}