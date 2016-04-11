$(function(){
	$("#footerInclude").load("includes/footer-bar.html"); 
});
$(document).ready(function() {
	document.title = 'Bootstrap Example Blah';
	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "css/bootstrap.css"
	}).appendTo("head");
	$("<link/>", {
	   rel: "stylesheet",
	   type: "text/css",
	   href: "css/epost-view.css"
	}).appendTo("head");
	$("<script/>", {
	   src: "js/bootstrap.js",
	}).appendTo("head");
});

function signinUser(username, password) {
	var query = 'http://mydomain.com:8080/ePostServices/rest/getCategory/signin';
	var data = "{\"username\":\""+username+"\",\"password\":\""+password+"\"}";

	$.ajax({
		headers: { 
			'Content-Type': 'application/json' 
		},
		'url': query,
		'type': 'POST',
		'data': data,
		'success': function(data, status) {
			console.log('success : ', data);
			$("#navInclude").load("includes/nav-bar.html"); 
		},
		'complete': function(data,status) {
			console.log('complete : ', status);
		}
	});
}

function getUserData() {
	var query = 'http://mydomain.com:8080/ePostServices/rest/getCategory/getUser';

	$.ajax({
		headers: { 
			'accept': 'application/json' 
		},
		'url': query,
		'type': 'GET',
		'success': function(data, status) {
			console.log('success : ', data);
		},
		'complete': function(data,status) {
			console.log('complete : ', status);
		}
	});
}