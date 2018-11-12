$(function() {

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");
		$('.header .main-nav').toggleClass("show");
		$('.header-right').toggleClass("show");
	});

});
