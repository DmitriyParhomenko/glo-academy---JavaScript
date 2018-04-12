$(document).ready(function() {
	let mainbtna = $('.main_btna'),
		close_modal = $('.close'),
		mainbtn	= $('.main_btn');

	$(mainbtna).on('click', function(){
		$('.overlay').fadeIn();
		$('.modal').animate(
		  {
		    opacity: "show",
		    height: "show"
		  },
		1500);
	});

	$(mainbtn).on('click', function(){
		$('.overlay').fadeIn();
		$('.modal').animate(
		  {
		    opacity: "show",
		    height: "show"
		  },
		1500);
	});

	$(close_modal).on('click', function(){
		$('.modal').animate(
		  {
		    opacity: "hide",
		    height: "hide"
		  },
		1000);
		$('.overlay').fadeOut();
	});

});