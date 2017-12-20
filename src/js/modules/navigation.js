/**
* Off Canvas Menu
*/

export default function() {
  var offCanvas = $('.navbar-offcanvas');
  var button = $('.navbar-toggle');
  var body = $('body');

  $('.close-icon').click(function(e) {
    e.preventDefault();
    offCanvas.removeClass('in');
    button.removeClass('is-open');
    body.removeClass('offcanvas-stop-scrolling');
  });
}