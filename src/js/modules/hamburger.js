/**
* Hamburger Menu
*/

export default function() {
  var headertopWrapper = $('.header__top-wrapper');
  var toggleButton = $('.js-nav-toggle');
  var headerLogo = $('.header__logo img');

  toggleButton.click(function(e) {
    e.preventDefault();
    headertopWrapper.toggleClass('active');

    if(headertopWrapper.hasClass('active')) {
      $(".js-nav-collapse").slideDown();
      headerLogo.attr('src', 'assets/img/mc-logo-black.svg');
      // .css("display","inline-block");
    } else {
      $(".js-nav-collapse").slideUp();
      headerLogo.attr('src', 'assets/img/mc-logo.svg');
    }
  });
}