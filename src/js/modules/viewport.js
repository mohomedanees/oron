/**
* Jquery Viewport Visible
*/

export default function() {
  $.fn.is_on_screen = function(){       
    var win = $(window);
       
    var viewport = {
      top : win.scrollTop(),
      left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
     
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
     
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
  };

  function isTargetVisible() {
    var retunVal = false;
    $('.hero').each(function() {
      if($(this).is_on_screen() ) {
        retunVal = true;
      }
    });
    return retunVal;
  }

  function menuSlideHandler() {
    var header  = $('.js-header');
    var hero = $('.hero');

    if (isTargetVisible()) {
      header.addClass('header--full');
    } else {
      header.removeClass('header--full');
    }
  }

  $(document).ready(function(e){
    menuSlideHandler();
  });

  $(window).scroll(function(e){
    menuSlideHandler();
  });
}