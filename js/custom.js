w3.includeHTML();

$(document).ready(function() {
	// Navigation filter
	$("nav polygon").mouseover(function() {
		$(this).attr("filter","url('#f1')");
	});

	$("nav polygon").mouseout(function() {
		$(this).removeAttr("filter");
	});

	$("nav h2").mouseover(function() {
		target = $(this).attr("data-polygon-target");
		$("#" + target).attr("filter","url('#f1')");
	});

	$("nav h2").mouseout(function() {
		$("nav polygon").removeAttr("filter");
	});
});

/* Home Type Animation */
function typed_load() {
	var typed = new Typed("#typeHere", {
		stringsElement: "#typeText",
		typeSpeed: 100,
		backSpeed: 100,
		backDelay: 750,
		startDelay: 750,
		loop: true,
		smartBackspace: false
	});

	//Change Type Cursor to Match Current Font and Font Size
	$(document).on("DOMSubtreeModified", "#typeHere", function() {
		var currentFont = $("#typeHere span").css("font-family");
		$(".typed-cursor").css("font-family",currentFont);

		var currentFontSize = $("#typeHere span").css("font-size");
		$(".typed-cursor").css("font-size",currentFontSize);

		var currentFontColor = $("#typeHere span").css("color");
		$(".typed-cursor").css("color",currentFontColor);
	});
}
