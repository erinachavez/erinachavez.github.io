$(document).ready(function(){
	// Navigation filter
	$('polygon').mouseover(function(){
		$(this).attr('filter','url(#f1)');
	});

	$('polygon').mouseout(function(){
		$(this).removeAttr('filter');
	});

	$('h2').mouseover(function(){
		h2id = $(this).attr('id');
		h2id = '.' + h2id;
		$(h2id).attr('filter','url(#f1)');
	});

	$('h2').mouseout(function(){
		$('polygon').removeAttr('filter');
	});

	// Works
	$('.main-carousel').flickity({
		cellAlign: 'left',
		contain: true,
		wrapAround: true,
		freeScroll: true,
		pageDots: false,
		prevNextButtons: false,
		autoPlay: 2000
	});

	$('.main-carousel').mouseover(function(){
		$('#alert').css('opacity','1');
	});

	$('.main-carousel').mouseleave(function(){
		$('#alert').css('opacity','0');
	});
});

/* Home Type Animation */
function typed_load(){
	var typed = new Typed("#typeHere", {
		stringsElement: '#typeText',
		typeSpeed: 100,
		backSpeed: 100,
		backDelay: 750,
		startDelay: 750,
		loop: true,
		smartBackspace: false
	});

	//Change Type Cursor to Match Current Font and Font Size
	$(document).on('DOMSubtreeModified', '#typeHere', function(){
		var currentFont = $('#typeHere span').css('font-family');
		$('.typed-cursor').css('font-family',currentFont);

		var currentFontSize = $('#typeHere span').css('font-size');
		$('.typed-cursor').css('font-size',currentFontSize);

		var currentFontColor = $('#typeHere span').css('color');
		$('.typed-cursor').css('color',currentFontColor);
	});
}
