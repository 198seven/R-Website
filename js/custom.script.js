    /* ---------------------------------------------
        05. Slider
    --------------------------------------------- */
    $('.slider_inner').owlCarousel({
        center: false,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        singleItem: false,
        loop: true,
        margin: 0,
        nav: false,
        dots: true
    }); 

    

	 // fade in clouds after intro image loaded
    $('.clouds').animate({ opacity:0.3 }, 1000);
	    
    