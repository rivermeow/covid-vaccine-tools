javascript:
var CHECK_SLOTS_URL="https://www.riteaid.com/services/ext/v2/vaccine/checkSlots";
$('.appt-check-status').remove();

$('.covid-store__store').each(function(){
	var desc = $(this).find('.copy-body').text();
	var num = desc.substring(desc.indexOf('#')+1,desc.indexOf(' ('));
	var self = this;
	var store = $(this).find('.covid-store__store__icon');
	$.get( CHECK_SLOTS_URL, { storeNumber: num}, function( data ) {
	  
	  if(data.Data.slots[1] == true){
		console.log('store ' + num + ' may have appointments');
		store.append('<span title="Appointsment may be available" class="appt-check-status"><br/><i class="fas fa-check-circle fa-2x" style="color:green;"></i></span>');
	  } else {
		store.append('<span title="No appointments are available" class="appt-check-status"><br/><i class="fas fa-times-circle fa-2x"></i></span>');
	  }
	});
		
});
