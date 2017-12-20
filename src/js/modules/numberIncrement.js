/**
* Number Increment
*/

export default function() {
  $(".quantity-control").on("click", function() {

    var $button = $(this);
    var oldValue = $button.parent().parent().find("input.quantity").val();

    console.log(oldValue);

    if ($button.hasClass('increase')) {
      var newVal = parseFloat(oldValue) + 1;

      if (oldValue > 9) {
        return false;
      }
    } else {
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }

    $button.parent().parent().find("input.quantity").val(newVal);
  });
}