


$(document).ready(function() {
	var insertionHtml = "<div>";
	for(var i=0; i<list.length; i++) {
		insertionHtml += "<a href=\"SEM.html?id="+list[i].ID+"\" class=\"list-group-item\">"
                            + "<div class=\"checkbox\">"
                                + "<label>"
                                    + "<input type=\"checkbox\" checked>"
                                + "</label>"
                            + "</div>"
                            + "<span class=\"glyphicon glyphicon-star-empty\"></span><span class=\"name\" style=\"min-width: 120px;"
                                + "display: inline-block;\">Mark Otto" + i +"</span> <span class=\"\">"+list[i].Subject+"</span>"
                            + "<span class=\"text-muted\" style=\"font-size: 11px;\">- More content here</span> <span class=\"badge\">"+list[i].Time+"</span> <span class=\"pull-right\">"
                            if (list[i].Attch != "0") {
                            	insertionHtml += '<span class=\"glyphicon glyphicon-paperclip\">"'	
                            }
                            
                                + "</span></span>"
						+ "</a>";
	}
	insertionHtml += "</div>"
	$("#recMails").append(insertionHtml);
	$("#sentMails").append(insertionHtml);
	$("#starredMails").append(insertionHtml);
});
