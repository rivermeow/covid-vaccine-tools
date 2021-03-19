javascript:(function(){
$('#dateOfBirth').click();
$('#dateOfBirth').val('12/12/1912');
$('#dateOfBirth').keyup();
$('#city').val('Vancouver');
$('#eligibility_state').val('Washington');
$('#zip').val('98632');
$('#Occupation').val('Childcare Worker');
$('#occu').val('Childcare Worker');
$('#mediconditions').val('None of the Above');
$('#medcond').val('None of the Above');
$('#continue').attr('disabled',false);
$('#continue').click();

setTimeout(function(){ 
$('#learnmorebttn').click(); }, 1000);
})();
