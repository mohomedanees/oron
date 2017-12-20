/**
* Loading
*/

export default function() {
  $(window).load(function() {
    // Animate loader off screen
    $(".o-loading-container").fadeOut("slow");
  });
}