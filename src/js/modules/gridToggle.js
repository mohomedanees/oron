/**
* Grid Toggle
*/

export default function() {
  var list = $('.list'),
  toggler = $('.js-grid-toggle');

  toggler.on("click", function(e) {
    list.toggleClass("list__grid");

    if(list.hasClass('list__grid')) {
      $('.js-grid-toggle .fa').removeClass('fa-th-large');
      $('.js-grid-toggle .fa').addClass('fa-th-list');
      $('.wrapper').addClass('row');
    } else {
      $('.js-grid-toggle .fa').addClass('fa-th-large');
      $('.js-grid-toggle .fa').removeClass('fa-th-list');
      $('.wrapper').removeClass('row');
    }
  });
}