javascript:
	var CHECK_SLOTS_URL="https://www.riteaid.com/services/ext/v2/vaccine/checkSlots";
	var GET_SLOTS_URL='https://www.riteaid.com/content/riteaid-web/en.ragetavailableappointmentslots.json';
	var sitekey = $('div[data-template-id="covidScheduler"]').attr('data-public-site-key');
	$('.appt-check-status').remove();
	$('.slots-found').remove();

	$('.covid-store__store').each(function(){
		var desc = $(this).find('.copy-body').text();
		var num = desc.substring(desc.indexOf('#')+1,desc.indexOf(' ('));
		var self = this;
		var store = this;

		$.get( CHECK_SLOTS_URL, { storeNumber: num}, function( data ) {
		  
		  if(hasSlots(data.Data.slots) == true){
			checkForSlotTimes(num, store);
		  } else {
			getStoreIcon(store).append('<span title="No appointments are available" class="appt-check-status"><br/><i class="fas fa-times-circle fa-2x"></i></span>');
		  }
		});
			
	});

	function hasSlots(slots){
	    var found = false;
        for (const [key, value] of Object.entries(slots)) {
            if(value == true || value.length > 0){found = true;break;}; 
        }
        return found;
	}

	function firstNotEmpty(slots){
	    var found = false;
        for (const [key, value] of Object.entries(slots)) {
            if(value.length > 0){found = true;return key;}; 
        }
        return -1;
	}

	function checkForSlotTimes(num, store ){
			grecaptcha.execute(sitekey, {action: 'submit'}).then(function(mytoken) {
				console.log(mytoken);
				$.get( GET_SLOTS_URL, { storeNumber: num, captchatoken: mytoken, moment:new Date().getTime()}, function( data ) {
				  if(hasSlots(data.Data.slots)){
					console.log('store ' + num + ' may have appointments: ' + data.Data.slots[1]);
					getStoreIcon(store).append('<span title="Appointsment may be available" class="appt-check-status"><br/><i class="fas fa-check-circle fa-2x" style="color:green;"></i></span>');
					var breakdown = getDayBreakdown(data.Data.slots);
					console.log(breakdown);
					$(store).find('.covid-store__store__btn').append('<span title="'+breakdown+
					 '"class="slots-found link color-black">'+ 'Slots found: ' + breakdown + '</span>');				
				  } else {
					getStoreIcon(store).append('<span title="No appointments are available" class="appt-check-status"><br/><i class="fas fa-times-circle fa-2x"></i></span>');
				  }
				});
		   });
	}

	function getDayBreakdown(slots) {
		var counts = {};
		var index = firstNotEmpty(slots);
		slots[index].forEach(function(item){
			var day = item.substring(0,item.indexOf('T'));
			counts[day] = counts[day] ? counts[day] + 1 : 1;
		});
		
		var countList = '';
		
		Object.entries(counts).forEach(function(v,k){countList += '<br/>' + v[0] + ' - ' + v[1];});
        countList = '<span>' + countList + '</span>';
		
		return countList;
	}

	function getStoreIcon(store) {
		return $(store).find('.covid-store__store__icon');
	}
