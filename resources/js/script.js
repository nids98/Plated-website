$(document).ready(function(){

	$('.js-wp-main').addClass('animated zoomIn');

	// Sticky navigation
	$('.js-section-features').waypoint(function(direction){
		if(direction=="down"){
			$('nav').addClass('sticky');

		}else{
			$('nav').removeClass('sticky');
		}
	},{ offset: '80px'}
	);

	// Scroll on buttons
	$('.js-scroll-to-plans').click(function(){
		$('html,body').animate({scrollTop: $('.js-section-plans').offset().top}, 1000);
	});
	$('.js-scroll-to-start').click(function(){
		$('html,body').animate({scrollTop: $('.js-section-features').offset().top}, 1000);
	});

	// Nav scroll - Snippet from https://csstricks.com/snippets/jquery/smooth-scrolling
	$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
    	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname
    	) {
	    	var target = $(this.hash);
	    	target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

		    if (target.length) {
		        event.preventDefault();

		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		    }
	      }
	});


	// Animatons on scroll
	// For features
	$('.js-wp-features').waypoint(function(direction){
		$('.js-wp-features').addClass('animated fadeIn');
	},{
		offset:'50%'
	});

	// For iPhone
	$('.js-wp-screen').waypoint(function(direction){
		$('.js-wp-screen').addClass('animated fadeInUp');
	},{
		offset:'50%'
	});

	// For cities
	$('.js-wp-city').waypoint(function(direction){
		$('.js-wp-city').addClass('animated fadeIn');
	},{
		offset:'50%'
	});

	// For price plan
	$('.js-wp-plan').waypoint(function(direction){
		$('.js-wp-plan').addClass('animated pulse');
	},{
		offset:'50%'
	});

	//Responsive Navbar - mobile
	$('.js-nav-icon').click(function(){
		var nav=$('.js-main-nav');
		var icon=$('.js-nav-icon i');
		nav.slideToggle(200);
		if(icon.hasClass('ion-navicon-round')){
			icon.removeClass('ion-navicon-round');
			icon.addClass('ion-close-round');
		}else{
			icon.removeClass('ion-close-round');
			icon.addClass('ion-navicon-round');
		}
	});

	// Maps
	var map = new GMaps({
	  div: '.map',
	   lat: 51.509865,
	  lng: -0.118092
	  // lat: 48.5994,
	  // lng: -38.6731
	  // zoom: 3
	});
	map.addMarker({
	  lat: 51.509865,
	  lng: -0.118092,
	  title: 'London',
	  infoWindow: {
 		 content: '<p>Plated London</p>'
	  }
	});
	map.addMarker({
	  lat: 38.736946,
	  lng: -9.142685,
	  title: 'Lisbon',
	  infoWindow: {
 		 content: '<p>Plated Lisbon</p>'
	  }
	});
	map.addMarker({
	  lat: 52.5200,
	  lng: 13.4050,
	  title: 'Berlin',
	  infoWindow: {
 		 content: '<p>Plated Berlin</p>'
	  }
	});
	map.addMarker({
	  lat: 37.7749,
	  lng: -122.4194,
	  title: 'San Francisco',
	  infoWindow: {
 		 content: '<p>Plated San Francisco</p>'
	  }
	});

});