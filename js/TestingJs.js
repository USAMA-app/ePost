
$(document).ready(function(){

	console.log("consoless");

	$("#btn").click(function(){

		console.log("click");

		var ID = $("#ID").val();
		console.log(ID);
		SendTestingData(ID);

GetData();


	});

});


function SendTestingData(ID){

	var Q = servicesUrl + "/Usama/Data/";

	var Data = "{\"id\":\""+ID+"\"}";



console.log(Data);

	ajaxGetCall(Q,Data,function(result,status){
		console.log("Result of Ajax Call : " , result);
	});


}


function GetData(){

var Query = servicesUrl + "/Usama/GetPost";

	var Data = "";

	ajaxGetCall(Query,Data,function(result,status){

		console.log("",result);

		$(document).ready(function(){

		for (var i = 0; i < result.length; i++) {
			
			var Div = "<div id="+result[i].PostID+" style=\"width:500px;\"><h1>"+result[i].Heading+"</h1><hr style=\"margin-top:-10px;\" /><br/><p>"+result[i].Des+"</p><button style=\"float:right;\" id=\"Btn\" class=\"btn btn-default\">Check</button></div>";
			$("#d").append(Div);	
			console.log(result[i])
		};

		});

	});


}