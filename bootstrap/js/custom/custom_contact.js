$(document).ready( function(){
	$("#ss-submit").mouseenter(function(){
	    $("#ss-submit").removeClass("toggle_display_block");
	    $("#ss-submit").addClass("toggle_display_none");
	    $("#submit2").removeClass("toggle_display_none");
	    $("#submit2").addClass("toggle_display_block");
	});

	$("#submit2").mouseleave(function(){
	    $("#submit2").removeClass("toggle_display_block");
	    $("#submit2").addClass("toggle_display_none");
	    $("#ss-submit").removeClass("toggle_display_none");
	    $("#ss-submit").addClass("toggle_display_block");
	});
});