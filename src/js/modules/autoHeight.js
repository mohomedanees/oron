/**
* Auto Height for Sections
*/

export default function() {
  var winWidth = $(window).width();

  if(winWidth <= 767) {
    $('.featured__with-photo--invert').addClass('fp-auto-height');
  } else {
    $('.featured__with-photo--invert').removeClass('fp-auto-height');
  }
}