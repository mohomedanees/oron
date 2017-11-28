/**
* Off Cabvas Menu
*/

export default function() {
  var offCanvas = $('.navbar-offcanvas');
  var button = $('.navbar-toggle');

  $('.close-icon').click(function(e) {
    e.preventDefault();
    offCanvas.removeClass('in');
    button.removeClass('is-open');
  });
}