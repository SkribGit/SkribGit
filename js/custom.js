( function($) {
	
	"use strict";

	$('.popover_parent > a').on("click", function() {
	  $('.popover_parent > a').not(this).parent().removeClass('active');
	  $(this).parent().toggleClass('active');
	  $('.search input[type="text"]').focus();
	});
	//Hide the menu when clicked off
	$('html').on("click", function() {
	  $('.popover_parent.active').removeClass('active');
	});
	//Don't include button or menu in 'html' click function
	$('.popover, .popover_parent > a').on("click", function(event){
	   event.stopPropagation();
	});


	/* ==============================================
		Parallax
	=============================================== */
	$('#header').parallax("50%", -0.4);
	$('#parallax-1').parallax("50%", -0.4);
	$('.shop-parallax').parallax("50%", -0.4);

	/* ==============================================
		TO TOP
	=============================================== */
	jQuery().UItoTop({ easingType: 'easeOutQuart' });


	
	/* ==============================================
		Counters
	=============================================== */
	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });
	
	/* ==============================================
		Owl Carousel 
	=============================================== */
	$("#w-owl").owlCarousel({
 
	items: 2,
      navigation : true, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem: true,
	  autoPlay: 4000,
	  responsive: true
 
	});
	
	/* ==============================================
		Owl Carousel 1
	=============================================== */
	$("#owl-1").owlCarousel({
 
	items: 2,
      navigation : true, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem: true,
	  responsive: true
 
	});
	
	/* ==============================================
		Owl Carousel 2
	=============================================== */
	$("#owl-2").owlCarousel({
 
	items: 4,
      navigation : true, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:false,
      paginationSpeed : 400,
      singleItem: false,
	  responsive: true
 
	});
	
	/* ==============================================
		Owl Carousel 3
	=============================================== */
	$("#owl-3").owlCarousel({
 
	items: 3,
      navigation : false, // Show next and prev buttons
	  navigationText: false,
      slideSpeed : 300,
	  pagination:true,
      paginationSpeed : 400,
      singleItem: false,
	  responsive: true
 
	});
	
	//pie charts	
			jQuery('#pie-charts').waypoint(function(direction) {			
				$('.chart').easyPieChart({
					scaleColor: "#ecf0f1",
					lineWidth: 5,
					lineCap: 'butt',
					barColor: '#bea473',
					trackColor:	"#ecf0f1",
					size: 160,
					animate: 1500
				  });
				}, {
				offset: function() {
					return jQuery.waypoints('viewportHeight') - jQuery(this).height() + 50;
				}
			});

	
})(jQuery);