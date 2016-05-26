$(document).ready(function() {

    $("#submitvalue").click(function() {

        var a = $("#To").val().length;
        var b = $("#subject").val().length;
        var c = $("#body").val().length;
        
		var files = $("#files")[0].files;

		var result = SendMail(a,b,c,files);

        if (result != false && result !="undefined") {
            $("#message").fadeIn(1000);
            $("#message").fadeOut(3000);
        }else{
        	$("#messageError").fadeIn(1000);
            $("#messageError").fadeOut(3000);
        }

    });



    function SendMail(To, Subject, Body, files) {
        var query = servicesUrl + '/userData/SendMail';

		var filesarr = '\"Files\":{';

		if (files!=null) {

		for (var i = 0; i < files.length; i++)
   			 filesarr += "\""+files[i].name+"\",";
		}

   		filesarr += "}";

		var data = '{\"To\":\"" + TO + "\",\"Subject\":\"" + Subject + "\",\"Body\":\"" + Subject + "\",'+filesarr+'}';

        ajaxPostCall(query, data, function(result, status) {
            
            if (result.Status == true && result != "undefined") {
                return true;
            } else {
                return false;
            }
        });
    }



});
