$(document).ready( function(){

	var i = 0;

	do{
		setTimeout(function(){
		    $("#typed_1").typed({
		        stringsElement: $('#typed-strings_1'),
		        typeSpeed: 100,
		        backDelay: 2000,
		        backSpeed: 100,
		        loop: true
		    });
		},5625*i);
		i++;

		setTimeout(function(){
			$(".typed_1").addClass("hidden");
		}, 5625*i);

		setTimeout(function(){
			$(".typed_2").removeClass("hidden");
		}, 5625*i);

		setTimeout(function(){
		    $("#typed_2").typed({
		        stringsElement: $('#typed-strings_2'),
		        typeSpeed: 100,
		        backDelay: 2000,
		        backSpeed: 100,
		        loop: true
		    });
		}, 5625*i);
		i++;

		setTimeout(function(){
			$(".typed_2").addClass("hidden");
		}, 5625*i);

		setTimeout(function(){
			$(".typed_3").removeClass("hidden");
		}, 5625*i);

		setTimeout(function(){
		    $("#typed_3").typed({
		        stringsElement: $('#typed-strings_3'),
		        typeSpeed: 100,
		        backDelay: 2000,
		        backSpeed: 100,
		        loop: true
		    });
		}, 5625*i);
		i++;

		setTimeout(function(){
			$(".typed_3").addClass("hidden");
		}, 5625*i);

		setTimeout(function(){
			$(".typed_4").removeClass("hidden");
		}, 5625*i);

		setTimeout(function(){
		    $("#typed_4").typed({
		        stringsElement: $('#typed-strings_4'),
		        typeSpeed: 100,
		        backDelay: 2000,
		        backSpeed: 100,
		        loop: true
		    });
		}, 5625*i);
		i++;

		setTimeout(function(){
			$(".typed_4").addClass("hidden");
		}, 5625*i);

		setTimeout(function(){
			$(".typed_5").removeClass("hidden");
		}, 5625*i);

		setTimeout(function(){
		    $("#typed_5").typed({
		        stringsElement: $('#typed-strings_5'),
		        typeSpeed: 100,
		        backDelay: 2000,
		        backSpeed: 100,
		        loop: true
		    });
		}, 5625*i);
		i++;

		setTimeout(function(){
			$(".typed_5").addClass("hidden");
		}, 5625*i);

		setTimeout(function(){
			$(".typed_1").removeClass("hidden");
		}, 5625*i);
	}
	while(i<10000);

});