// Footer and Nav Includes
w3.includeHTML();

$(document).ready(function() {
	// Nav Filters
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

	// Works Checkboxes
	$("#works .checkbox-line input[type='checkbox']").each(function() {
		$(this).on("change", function() {
			var toggledClass = $(this).val();

			if ($(this).is(":checked")) {
				$("." + toggledClass).show();
				$("." + toggledClass + ".lightbox-item").removeClass("lightbox-skip");
			}
			else {
				$("." + toggledClass).hide();
				$("." + toggledClass + ".lightbox-item").addClass("lightbox-skip");
			}
		});
	});

	slideIndex = 0;
});

// Home Typing Animation
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

// Works Lighbox
function openModal(n) {
  $("#lightbox").css("display", "flex");
	showSlides(n);
}

function closeModal() {
  $("#lightbox").css("display", "none");
}

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function showSlides(n) {
  var slides = document.querySelectorAll(".lightbox-item:not(.lightbox-skip)");

  if (n > slides.length-1) {slideIndex = 0;}
  else if (n < 0) {slideIndex = slides.length-1;}
	else {slideIndex = n;}

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
