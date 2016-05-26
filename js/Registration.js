function Send(address,username,password,fullname,email){

var Query = servicesUrl + "/userData/Reg";

	var Data = "{\"Username\":\""+username+"\",\"Password\":\""+password+",\"Address\":\""+address+",\"FullName\":\""+fullname+",\"Email\":\""+email+"}";

	ajaxPostCall(Query,Data,function(result,status){

		console.log(result);	


	});


		window.location.assign("RequestSubmit.html");

}