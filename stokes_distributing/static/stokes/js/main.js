/*************************************************************
 * Brew
 * 1.0.1
 * by WEBIDIA
*************************************************************/

jQuery(document).ready(function() {
	"use strict";
	var $ = jQuery;
	
	/*************************************************************
	 * Google Maps - General
	 * https://github.com/hpneo/gmaps
	 *
	 * GPS Co-ordinates for lat & lng
	 * http://www.gps-coordinates.net/
	 *
	 * Map Styles
	 * https://snazzymaps.com/style/80/cool-grey
	 *************************************************************/

	if ($('.home-gmap').length) {
		var map = new GMaps({
			el: '.home-gmap',
			lat: 31.24731035244457,
			lng: -89.2788249128139,
			hideInfoWindows: true,
			navigationControl: false,
			mapTypeControl: false,
			zoom: 11,
			zoomControl: true,
			streetViewControl: false,
			disableDoubleClickZoom: true,
			scaleControl: true,
			draggable: true,
			scrollwheel: false,
			styles: [
			    {
			        "featureType": "landscape",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "on"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "stylers": [
			            {
			                "hue": "#00aaff"
			            },
			            {
			                "saturation": -100
			            },
			            {
			                "gamma": 2.15
			            },
			            {
			                "lightness": 12
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 24
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 57
			            }
			        ]
			    }
			]
		});

		// Map Markers
		map.addMarker({
			lat: 51.5117321,
			lng: -0.12326970000003712,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location One</strong><br/>Covent Garden<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.4911875,
			lng: -0.22373149999998532,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Two</strong><br/>Hammersmith<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.485093,
			lng: -0.17493600000000242,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Three</strong><br/>Chelsea<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.52849,
			lng: -0.08472800000004099,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Four</strong><br/>Lewisham<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.4612794,
			lng: -0.11561480000000302,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Five</strong><br/>Brixton<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.46647699999999,
			lng: 0.025918999999930747,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Six</strong><br/>Kidsbrooke<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.5501741,
			lng: -0.003371000000015556,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Seven</strong><br/>Stratford<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.550501,
			lng: -0.3048409000000447,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Eight</strong><br/>Wembley<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

		map.addMarker({
			lat: 51.44458100000001,
			lng: -0.3352459999999837,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location Nine</strong><br/>Twickenham<br/>London<br/><a href="javascript:void(0);">Visit Website</a>'
			}
		});

	}

	/*************************************************************
	 * Google Maps - Contact
	 * https://github.com/hpneo/gmaps
	 *
	 * GPS Co-ordinates for lat & lng
	 * http://www.gps-coordinates.net/
	 *
	 * Map Styles
	 * https://snazzymaps.com/style/80/cool-grey
	 *************************************************************/

	if ($('.contact-gmap').length) {
		var map = new GMaps({
			el: '.contact-gmap',
			lat: 51.5117321,
			lng: -0.12326970000003712,
			hideInfoWindows: true,
			navigationControl: false,
			mapTypeControl: false,
			zoom: 15,
			zoomControl: false,
			streetViewControl: false,
			disableDoubleClickZoom: true,
			scaleControl: true,
			draggable: true,
			scrollwheel: false,
			styles: [
			    {
			        "featureType": "landscape",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "stylers": [
			            {
			                "hue": "#00aaff"
			            },
			            {
			                "saturation": -100
			            },
			            {
			                "gamma": 2.15
			            },
			            {
			                "lightness": 12
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 24
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 57
			            }
			        ]
			    }
			]
		});

		// Map Markers
		map.addMarker({
			lat: 51.5117321,
			lng: -0.12326970000003712,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Location One</strong><br/>Covent Garden<br/>London<br/><i class="fa fa-phone"></i> 00000 000000'
			}
		});

	}

	/*************************************************************
	 * Google Maps - Events
	 * https://github.com/hpneo/gmaps
	 *
	 * GPS Co-ordinates for lat & lng
	 * http://www.gps-coordinates.net/
	 *
	 * Map Styles
	 * https://snazzymaps.com/style/80/cool-grey
	 *************************************************************/
	
	// Event One
	$('a[href="#events-location-1"]').on('shown.bs.tab', function(e) {

		// Load map on tab click
		var map = new GMaps({
			el: '#gmap-event-loc1',
			lat: 51.5117321,
			lng: -0.12326970000003712,
			hideInfoWindows: true,
			navigationControl: false,
			mapTypeControl: false,
			zoom: 15,
			zoomControl: false,
			streetViewControl: false,
			disableDoubleClickZoom: true,
			scaleControl: true,
			draggable: true,
			scrollwheel: false,
			styles: [
			    {
			        "featureType": "landscape",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "stylers": [
			            {
			                "hue": "#00aaff"
			            },
			            {
			                "saturation": -100
			            },
			            {
			                "gamma": 2.15
			            },
			            {
			                "lightness": 12
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 24
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 57
			            }
			        ]
			    }
			]
		});

		// Map Markers
		map.addMarker({
			lat: 51.5117321,
			lng: -0.12326970000003712,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Event Location</strong><br/>Covent Garden<br/>London'
			}
		});

		// Reload the map on tab refresh
        window.setTimeout(map.refresh(), 500);
    });

    // Event Two
	$('a[href="#events-location-2"]').on('shown.bs.tab', function(e) {

		// Load map on tab click
		var map = new GMaps({
			el: '#gmap-event-loc2',
			lat: 51.4911875,
			lng: -0.22373149999998532,
			hideInfoWindows: true,
			navigationControl: false,
			mapTypeControl: false,
			zoom: 15,
			zoomControl: false,
			streetViewControl: false,
			disableDoubleClickZoom: true,
			scaleControl: true,
			draggable: true,
			scrollwheel: false,
			styles: [
			    {
			        "featureType": "landscape",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "stylers": [
			            {
			                "hue": "#00aaff"
			            },
			            {
			                "saturation": -100
			            },
			            {
			                "gamma": 2.15
			            },
			            {
			                "lightness": 12
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 24
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 57
			            }
			        ]
			    }
			]
		});

		// Map Markers
		map.addMarker({
			lat: 51.4911875,
			lng: -0.22373149999998532,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Event Two</strong><br/>Hammersmith<br/>London'
			}
		});

		// Reload the map on tab refresh
        window.setTimeout(map.refresh(), 500);
    });

    // Event Three
	$('a[href="#events-location-3"]').on('shown.bs.tab', function(e) {

		// Load map on tab click
		var map = new GMaps({
			el: '#gmap-event-loc3',
			lat: 51.485093,
			lng: -0.17493600000000242,
			hideInfoWindows: true,
			navigationControl: false,
			mapTypeControl: false,
			zoom: 15,
			zoomControl: false,
			streetViewControl: false,
			disableDoubleClickZoom: true,
			scaleControl: true,
			draggable: true,
			scrollwheel: false,
			styles: [
			    {
			        "featureType": "landscape",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "water",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "stylers": [
			            {
			                "hue": "#00aaff"
			            },
			            {
			                "saturation": -100
			            },
			            {
			                "gamma": 2.15
			            },
			            {
			                "lightness": 12
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "lightness": 24
			            }
			        ]
			    },
			    {
			        "featureType": "road",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "lightness": 57
			            }
			        ]
			    }
			]
		});

		// Map Markers
		map.addMarker({
			lat: 51.485093,
			lng: -0.17493600000000242,
			icon: "./img/icon-map.png",
			infoWindow: {
				content: '<strong>Event Three</strong><br/>Chelsea<br/>London'
			}
		});

		// Reload the map on tab refresh
        window.setTimeout(map.refresh(), 500);
    });

    /*************************************************************
	 * Hero Header Section Scroll
	*************************************************************/

	$('.hero-start').on('click', function() {
		$('html, body').animate({
		    scrollTop: $(".entry-content > section:first-of-type").offset().top
		}, 1000);
	});

	/*************************************************************
	 * Back to Top
	 * https://github.com/imakewebthings/jquery-waypoints
	*************************************************************/

	// Toggle display of the button
	var waypointTopScroll = new Waypoint({
		element: $('.entry-content'),
		handler: function(direction) {
			$('.back-to-top').toggleClass('active', direction === 'down');
		}
	});

	// Return to top of page
	$('.back-to-top').on('click', function(e) {
		e.preventDefault();
		$('html,body').animate({
			scrollTop: 0
		}, 700);
	});

	/*************************************************************
	 * Menu Classes
	*************************************************************/

	// Add class for the megamenu when active
	$('.main-navigation li.has-child').on('mouseover', function() {
		$(this).find('.submenu').addClass('active');
	});

	$('.main-navigation li.has-child').on('mouseleave', function() {
		$(this).find('.submenu').removeClass('active');
	});

	/*************************************************************
	 * Mobile Menu
	 * https://github.com/dcdeiv/simpler-sidebar
	*************************************************************/

	$('#panel-left').simplerSidebar({
		opener: '.toggle-panel',
		mask: {
			display: true
		},
		animation: {
			duration: 350,
			easing: 'easeInOutCubic'
		},
		sidebar: {
			align: 'left',
			width: 375,
			closingLinks: '.close-sidebar'
		},
	});

	// Submenu Toggle
	$('.mobile-navigation li.has-child').on('click', function() {
		$(this).toggleClass('active');
		$(this).find('ul.submenu').addClass('active').slideToggle(500);
	});

	/*************************************************************
	 * Preloader
	 * https://github.com/Gix075/jqueryIntroLoader
	*************************************************************/

	// Slide up animation for homepage only
	if ($('body.home').length) {
		$('.introLoading').introLoader({
			animation: {
				name: 'gifLoader',

				options: {
					exitFx: 'slideUp',
					preventScroll: true,
					delayBefore: 1000,
					delayAfter: 1000,
					exitTime: 150,
					customGif: 'img/load.svg',
				}
			}
		});
	}

	else {
		$('.introLoading').introLoader({
			animation: {
				name: 'gifLoader',

				options: {
					exitFx: 'fadeOut',
					preventScroll: true,
					delayBefore: 1000,
					delayAfter: 1000,
					exitTime: 150,
					customGif: 'img/load.svg',
				}
			}
		});
	}

	/*************************************************************
	 * Lightbox
	 * https://github.com/noelboss/featherlight/
	*************************************************************/

	// Image Lightbox
	$('.image-lightbox').featherlight({
		targetAttr: 'href',
		loading: 'Loading..',
		closeOnEsc: true,
		closeOnClick: 'background',
		openSpeed: 250,
		closeSpeed: 250,
		variant: null,
	});

	// Post Format - Image
	$('figure.post-image').featherlight({
		targetAttr: 'data-image',
		loading: 'Loading..',
		closeOnEsc: true,
		closeOnClick: 'background',
		openSpeed: 250,
		closeSpeed: 250,
		variant: null,
		previousIcon: '<i class="fa fa-angle-left"></i>',
		nextIcon: '<i class="fa fa-angle-right"></i>'
	});

	// Post Format - Gallery
	$('.gallery-item > a').featherlight({
		targetAttr: 'href',
		loading: 'Loading..',
		closeOnEsc: true,
		closeOnClick: 'background',
		openSpeed: 250,
		closeSpeed: 250,
		variant: null,
		previousIcon: '<i class="fa fa-angle-left"></i>',
		nextIcon: '<i class="fa fa-angle-right"></i>'
	});

	// Portfolio Single
	$('.about-single-gallery').featherlightGallery({
		loading: 'Loading..',
		closeOnEsc: true,
		closeOnClick: 'background',
		openSpeed: 250,
		closeSpeed: 250,
		previousIcon: '<i class="fa fa-angle-left"></i>',
		nextIcon: '<i class="fa fa-angle-right"></i>'
	});

	/*************************************************************
	 * Carousel
	 * https://github.com/kenwheeler/slick/
	*************************************************************/

	// Clients
	$('.clients-carousel').slick({
		dots: true,
		arrows: false,
		draggable: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
					draggable: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true,
					draggable: true,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
					draggable: true,
				}
			}
		]
	});

	$('.new-product-carousel').slick({
		dots: true,
		arrows: false,
		draggable: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					draggable: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					draggable: true,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
					draggable: true,
				}
			}
		]
	});

	// Post Format - Gallery
	$('.format-gallery').slick({
		dots: true,
		arrows: false,
		adaptiveHeight: false,
		draggable: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 6000,
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					draggable: true,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					draggable: true,
				}
			},
			{
				breakpoint: 481,
				settings: {
					slidesToShow: 1,
					draggable: true,
				}
			}
		]
	});

	// Portfolio Single
	$('.about-slider').slick({
		autoplay: false,
		dots: false,
		adaptiveHeight: false
	});

	/*************************************************************
	 * Isotope - Blog
	 * https://github.com/metafizzy/isotope
	*************************************************************/

	$('.isotope-blog').imagesLoaded(function() {

		var $grid = $('.isotope-blog');

		$grid.isotope({
			layoutMode: 'packery',
			itemSelector: '.grid-item',
			percentagePostion: true,
			resize: true,
			animationEngine: 'best-available',
			transitionDuration: '0.30s'
		});
	});

	/*************************************************************
	 * Isotope - Portfolio
	 * https://github.com/metafizzy/isotope
	*************************************************************/

	$('.isotope-beers').imagesLoaded(function() {

		var $grid = $('.isotope-beers');

		$grid.isotope({
			layoutMode: 'packery',
			itemSelector: '.grid-item',
			percentagePostion: true,
			resize: true,
			animationEngine: 'best-available',
			transitionDuration: '0.30s'
		});

		// Portfolio Filters
		$('.isotope-filters').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');

			filterValue = filterValue;
			$grid.isotope({
				filter: filterValue
			});

			// Portfolio button filter
			$('.isotope-filters button').removeClass('is-checked');
			$(this).addClass('is-checked');

		});
	});

	$('.isotope-gallery').imagesLoaded(function() {

		var $grid = $('.isotope-gallery');

		$grid.isotope({
			layoutMode: 'packery',
			itemSelector: '.grid-item',
			percentagePostion: true,
			resize: true,
			animationEngine: 'best-available',
			transitionDuration: '0.30s'
		});

		// Portfolio Filters
		$('.isotope-filters').on('click', 'button', function() {
			var filterValue = $(this).attr('data-filter');

			filterValue = filterValue;
			$grid.isotope({
				filter: filterValue
			});

			// Portfolio button filter
			$('.isotope-filters button').removeClass('is-checked');
			$(this).addClass('is-checked');

		});
	});

	// Load More Example
	$('.load-more-wrapper > a').on('click', function() {

		var $this = $('.load-more-wrapper > a');
		var $icon = $('.load-more-wrapper > a > i');

		$this.addClass('loading fa-spin');
		$icon.addClass('fa-spin');


		setTimeout(function() {
			$this.removeClass('loading fa-spin');
			$icon.removeClass('fa-spin');
			document.querySelector('#load-div').style.display = 'block';
			document.querySelector('.load-more-wrapper').style.display = 'none';
		}, 2500);

	});

	/*************************************************************
	 * Selectric
	 * https://github.com/lcdsantos/jQuery-Selectric
	*************************************************************/

	if ($('select').length) {
		$('select').selectric();
	}

	/*************************************************************
	 * Tooltips
	 * https://github.com/iamceege/tooltipster
	*************************************************************/

	$('.tooltipster').tooltipster({
		animation: 'fade',
		delay: 200,
		theme: 'tooltipster-noir',
		touchDevices: false,
		trigger: 'hover'
	});

	/*************************************************************
	 * Social icons
	 * https://github.com/tabalinas/jssocials
	*************************************************************/

	if ($('.sm-share-buttons').length) {
		$('.sm-share-buttons').jsSocials({
			shares: ['email', 'twitter', 'facebook', 'googleplus', 'linkedin', 'pinterest'],
			showLabel: true,
			showCount: true,
			shareIn: 'popup',
		});
	}

	/*************************************************************
	 * Heart Post Example
	*************************************************************/

	$('a.meta-heart').on('click', function() {
		$(this).toggleClass('liked');
	});

	/*************************************************************
	 * Scroll Content Animations
	 * https://github.com/michalsnik/aos
	*************************************************************/
	if ( $('body.home').length ) {
		AOS.init();
	}

});