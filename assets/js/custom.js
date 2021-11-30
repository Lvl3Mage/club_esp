(function($) {
   "use strict";
	function ibg(){
		$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).find('img').first().css("width", 0);
			$(this).find('img').first().css("width", 0);
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
		});
	}
	function RatioW(){
		$.each($('.ratio-w'), function(index, val) {
			var ratioMultiplier = parseFloat($(this).attr("ratioMultiplier"));
			if(isNaN(ratioMultiplier)){
				ratioMultiplier = 1;
			}
			
			$(this).css("height", (parseFloat($(this).css("width")) * ratioMultiplier).toString() + "px");
		});
	}
	function RatioH(){
		$.each($('.ratio-h'), function(index, val) {
			var ratioMultiplier = parseFloat($(this).attr("ratioMultiplier"));
			if(isNaN(ratioMultiplier)){
				ratioMultiplier = 1;
			}
			$(this).css("width", (parseFloat($(this).css("height")) * ratioMultiplier).toString() + "px");
		});
	}
	$(window).resize(function(){
		RatioW();
		RatioH();
	}); 
	$(document).ready( function () {
		$(".about-us-slider").slick({
			arrows:false,
			dots:true,
			infinite: false,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
	  		autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},{
					breakpoint: 992,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					}
				},{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
		$(".reviews__slider").slick({
			arrows:true,
			dots:true,
			infinite: true,
			slidesToShow: 2,
			slidesToScroll: 1,
			autoplay: false,
	  		autoplaySpeed: 2000,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
						
					}
				}
			]
		});
		ibg();
		RatioW();
		RatioH();
	});
	$(document).on('click', '.mob-burger', function(event) {
		if($(this).hasClass("mob-burger--active")){
			$("body").css("overflow", "visible");
		}
		else{
			$("body").css("overflow", "hidden");
			$('html, body').animate(
				{
			      scrollTop: $('html, body').offset().top,
			   },
			   300
		   );
		}
		$(this).toggleClass("mob-burger--active");
		$(".mob-menu").toggleClass("mob-menu--active");

	});
})(jQuery);	