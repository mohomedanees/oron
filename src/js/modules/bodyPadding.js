/**
* Grid Toggle
*/

export default function() {
  var body = $('body'),
  winWidth = $(window).width();

  if($('.button--round')[0] && winWidth < 992) {
    body.addClass('add-padding');
  } else {
    body.removeClass('add-padding');
  }
}