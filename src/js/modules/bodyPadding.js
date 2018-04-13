/**
* Grid Toggle
*/

export default function() {
  // var body = $('body'),
  // winWidth = $(window).width();

  // if($('.button--round')[0] && winWidth < 992) {
  //   body.addClass('add-padding');
  // } else {
  //   body.removeClass('add-padding');
  // } 

  var wrapper = $('.wrapper'),
  winWidth = $(window).width(),
  btnRWHeight = $('.round-button__wrapper').outerHeight();

  if($('.button--round')[0] && winWidth < 992) {
  	wrapper.css({"padding-bottom": btnRWHeight + 65 + "px"})
  } else {
  	wrapper.css({"padding-bottom": btnRWHeight + "px"})
  }
}