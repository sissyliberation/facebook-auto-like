// ==UserScript==
// @name       	Facebook auto-like script
// @namespace  	https://github.com/yvescourtois/facebook-auto-like
// @version    	1.1
// @description will like every post on your wall
// @match       http*://www.facebook.com/courtois1337*
// @copyright  	none
// @require 	http://code.jquery.com/jquery-latest.js
// @owner 		Yves Courtois
// ==/UserScript==


$(".userContent").each(function() {
    var tmpVal = $(this).parentsUntil(".timelineUnitContainer").find(".UFILikeLink").text();
    if( tmpVal == "Like" ) {
        var a = $(this).parentsUntil(".timelineUnitContainer").find(".UFILikeLink");
        var b = jQuery.makeArray(a);
        b[0].click;
    }
});