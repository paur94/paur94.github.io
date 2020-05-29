$(function() { 
	var header = $("#header"), 
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window).scrollTop();

	//Fixed header
	checkScroll(scrollOffset);
	
	$(window).on("scroll", function() {
		scrollOffset = $(this).scrollTop();


		checkScroll(scrollOffset);
	});

	function checkScroll(scrollOffset) {    //refresh-i jamanak  chka header-y dra hamar

		if( scrollOffset >= introH ) header.addClass("fixed");
		else header.removeClass("fixed");
	}

	// Smooth scroll
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();/*otmenim standartnoe povedenie ssylki*/
		$("#nav").removeClass("active");

		var $this = $(this); 
			blockID = $this.data('scroll'),
			blockOffset = $(blockID).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset ///vor about-i vra gnaluc headery chkori
		}, 500);
	});


	//Burger menu toggle
	$("#nav-toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});
	
	$(".nav__link").on("click", function(event) {
		event.preventDefault();

		$(".nav-toggle").removeClass("active");
	});


	// Collapse
	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this); 
			blockID = $this.data('collapse');

		$this.toggleClass("active");
	});


	// Slider 
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
  		slidesToScroll: 1
	});
});

/*Scroll to top*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#to__top').fadeIn();
    } else {
        $('#to__top').fadeOut();
    }
});
$(document).ready(function() {
    $("#to__top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});