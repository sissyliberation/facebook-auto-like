// ==UserScript==
// @name       	Facebook auto-like script
// @namespace  	https://github.com/yvescourtois/facebook-auto-like
// @version    	2.1
// @description will like every post on your wall
// @match       https://www.facebook.com/your-custom-url
// @copyright  	none
// @require 	http://code.jquery.com/jquery-latest.js
// @owner 		Yves Courtois
// ==/UserScript==


// $("._6-6._6-7").size()== 0 means none is active on the bar 
// $("._6-6._6-7").text()=="Timeline") means it's on the right place
if($("._6-6._6-7").size()== 0 || $("._6-6._6-7").text()=="Timeline") {
    $(".userContent").each(function() {
        var tmpVal = $(this).parentsUntil(".timelineUnitContainer").find(".UFILikeLink").text();
        if( tmpVal == "Like" ) {
            var a = $(this).parentsUntil(".timelineUnitContainer").find(".UFILikeLink");
            a[0].click();
        }
    });
}
