/**
* FullPage Slider
*/

export default function() {
  $('#fullpage-js').fullpage({
    easing: 'easeInOutCubic',
    scrollingSpeed: 800,
    easingcss3: 'ease',
    css3: true,
    verticalCentered: false,
    hybrid: true,
    fitToSection: false,

    'afterLoad': function(anchorLink, index){
      //$('.js-hero-animate').addClass('anim-active');
    },

    'onLeave': function(index, nextIndex, direction){
      //$('.js-hero-animate').removeClass('anim-active');
      // if (index == 3 && direction == 'down'){
      //   $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
      // }
      // else if(index == 3 && direction == 'up'){
      //   $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
      // }

      // $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
      // $('#staticImg').toggleClass('moveDown', nextIndex == 4);
      // $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
      if(index == 2){
        $('.animate').addClass('fadeInUp');
      }
    }
  });
}