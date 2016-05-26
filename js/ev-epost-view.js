//servicesUrl = "http://localhost:8080/ePostServices/rest";
servicesUrl = "http://epost.azurewebsites.net/ePostServices/rest";

$.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return results[1] || 0;
    }
}



list = [
    { date: '26-05-2016', Time: '10:00 AM', Subject: 'Testing Mail 1 From Usama The Developer.', From: 'The Usama', Body: 'This is a Testing mail 1 Server and This is Uses for testing only.', ID: "1001", Attch: "0", StarMail: "1" },
    { date: '27-04-2016', Time: '02:00 PM', Subject: 'Testing Mail 2 From Usama The Developer.', From: 'The Usama', Body: 'This is a Testing mail 2 Server and This is Uses for testing only.', ID: "1002", Attch: "a.png", StarMail: "0" },
    { date: '29-01-2016', Time: '09:20 PM', Subject: 'Testing Mail 3 From Usama The Developer.', From: 'The Usama', Body: 'This is a Testing mail 3 Server and This is Uses for testing only.', ID: "1003", Attch: "b.png", StarMail: "1" },
    { date: '01-02-2016', Time: '05:52 AM', Subject: 'Testing Mail 4 From Usama The Developer.', From: 'The Usama', Body: 'This is a Testing mail 4 Server and This is Uses for testing only.', ID: "1004", Attch: "0", StarMail: "0" }
];

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