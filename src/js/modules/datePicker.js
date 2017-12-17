/**
* Date Picker
*/

export default function() {
  $(function () {
  	if($('.datepicker').length){
	    $('.datepicker').datetimepicker({
	      format: 'DD/MM/YYYY'
	    });
    }
  });
}