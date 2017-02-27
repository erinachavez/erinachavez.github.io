$(document).ready( function(){
	$("#submit").mouseenter(function(){
	    $("#submit").removeClass("toggle_display_block");
	    $("#submit").addClass("toggle_display_none");
	    $("#submit2").removeClass("toggle_display_none");
	    $("#submit2").addClass("toggle_display_block");
	});

	$("#submit2").mouseleave(function(){
	    $("#submit2").removeClass("toggle_display_block");
	    $("#submit2").addClass("toggle_display_none");
	    $("#submit").removeClass("toggle_display_none");
	    $("#submit").addClass("toggle_display_block");
	});
});