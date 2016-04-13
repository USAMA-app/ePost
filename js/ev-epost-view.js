servicesUrl = "http://mydomain.com:8080/ePostServices/rest";

$(document).ready(function() {
	$(function() {
		$("#footerInclude").load("includes/footer-bar.html"); 
		$("#logoHeader").load("includes/logo-header.html"); 
	});

	document.title = 'ePost Web Mail Services';

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
	   src: "js/bootstrap.min.js",
	}).appendTo("head");
});

function ajaxPostCall(query, data, handleResult) {
	$.ajax({
		headers: { 
			'Content-Type': 'application/json' 
		},
		'url': query,
		'type': 'POST',
		'data': data,
		'success': function(data, status) {
			handleResult(data, status);
		},
		'complete': function(data,status) {
			console.log('complete : ', status);
		}
	});
}

function ajaxGetCall(query, data, handleResult) {
	$.ajax({
		headers: { 
			'accept': 'application/json'
		},
		'url': query + data,
		'type': 'GET',
		'success': function(data, status) {
			handleResult(data, status);
		},
		'complete': function(data,status) {
			console.log('complete : ', status);
		}
	});
}