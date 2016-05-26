$(document).ready(function() {
	$("#myBtn").click(function(){
		var username = $("#evusername").val();
		var password = $("#evpassword").val();
		/*To use without Ajax Starts
		if(username == "uzair" && password == "ahmed") {
			window.location.href = "main.html";
		} else {
			$("#errorMsgLoginFailure").removeAttr("hidden");
		}*/
		/*To use without Ajax Ends*/
		
		/*To use with Ajax Starts*/
		signinUser(username, password);
		/*To use with Ajax Ends*/
	});
	$("#myBtn").html("Submit");
});

function signinUser(username, password) {
	var query = servicesUrl + '/userData/signin';
	var data = "{\"username\":\""+username+"\",\"password\":\""+password+"\"}";
	ajaxPostCall(query, data, function(result, status) {
		//console.log("Result of Ajax Call : " , result);
		if(result.userId != 0) {
			window.location.href = "main.html";
		} else {
			$("#errorMsgLoginFailure").removeAttr("hidden");
		}
	});
}

function getUserData() {
	var query = servicesUrl + '/userData/getUser';
	var data = ""
	ajaxGetCall(query, data, function(result, status) {
		console.log("Result of Ajax Call : " , result);
	});
}

function getUsersData() {
	var query = servicesUrl + '/userData/getUsers';
	var data = ""
	ajaxGetCall(query, data, function(result, status) {
		console.log("Result of Ajax Call : " , result);
	});
}

function getUserById(id) {
	var query = servicesUrl + '/userData';
	var data = "/" + id;
	ajaxGetCall(query, data, function(result, status) {
		console.log("Result of Ajax Call : " , result);
	});
}