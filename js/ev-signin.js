$(document).ready(function(){
	$("#myBtn").click(function(){
		var username = $("#evusername").val();
		var password = $("#evpassword").val();
		alert("button clicked : " + username + " : " + password);
		signinUser(username, password);
	});
	$("#myBtn").html("save");
});