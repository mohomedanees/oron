/**
* Date Picker
*/

export default function() {
  $(function () {
    $('.datepicker').datetimepicker({
      format: 'DD/MM/YYYY'
    });
  });
}