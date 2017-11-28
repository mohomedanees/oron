/**
* Loading
*/

export default function() {
  $('[data-tooltip]').qtip({
    content: {
      attr: 'data-tooltip',
      button: 'x'
    },
    position: {
      my: 'center left',
      at: 'bottom right',
      target: $('.tooltip'),
      viewport: $(window),
      adjust: {
        resize: true,
        method: 'shift shift',
        x: 0,
        y: -10
      }
    },
    style: {
      classes: 'tooltip-viewer',      
      tip: {
        corner: true,
        //corner: 'left center',
        //mimic: 'center top',
        border: 1,
        width: 40,
        height: 40,
        offset: -35
      }
    },
    show: {
      event: 'click',
      effect: function() {
        $(this).fadeTo(500, 1);
      }
    },
    hide: {
      event: false,
      effect: function() {
        $(this).fadeTo(500, 0);
      }
    },
  });

  // $('[class*="tooltip"]').click(function (){
  //   $(this).removeClass('active');
  //   $(this).addClass('active');
  // });
}