
$(document).ready(function(){

var a = $.urlParam('id');

for (var i = 0; i < list.length; i++) {
 	if (list[i].ID == a) {
 		var vv = (list[i].Subject);

		$('#sub').text(vv);
		$('#froms').val((list[i].From));
		$('#body').text((list[i].Body));
		$('#Date').text(("Date : " + list[i].date + " | Time : " + list[i].Time));
		$('#del').attr('href','opt?id='+ a + '&d=1');
 	}
}


});
