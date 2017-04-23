// script.js
$(document).ready(function() {

	// var declarations
	var headingHeight = $('.heading').outerHeight();
	var colorDarkPurple = '#443850';
	var colorPurple = '#8964A1';
	$('.nav-dropdown .nav-link').click(function(e) {
	    e.preventDefault();
	});

	//// functions

	// miscellaneous

	// committees logic
	$('.committee-quick-link').click(function(e){
		e.preventDefault();
		$('.committee-quick-link').css({'color':'white'});
		$(this).css({'color':colorDarkPurple});

		var text = $(this).text().toLowerCase();

		$(".selected").removeClass("selected");
		$("#" + text).addClass("selected");
	});

	// associates logic
	$('.menu-link').click(function(e){
		e.preventDefault();
		$('.menu-link').css({'color':'white'});
		$(this).css({'color':colorDarkPurple});

		var text = $(this).text();
		var fellows = {"Masters":"masters", "Head Resident Fellows":"hrf", "2nd Floor RAs":"2ra", "3rd Floor RAs":"3ra", "College Coordinator":"cc"};

		$(".selected").removeClass("selected");
		$(".fellow-" + fellows[text]).addClass("selected");
	});

	// nav bar helpers
	function animateNavColorPosition(position, bgColor, accentColor, fontColor, fontAccent, fontWeight, fontOldWeight) {

		$('nav').css({'position': position, 'background-color': bgColor});
			$('.nav-link').css({'color':fontColor, 'font-weight':fontWeight});
			$('.nav-single').hover(
				function() {
					$(this).css({'background-color': accentColor});
					$(this).css({'color':fontAccent, 'font-weight':fontWeight});
				}, function() {
					$(this).css({'background-color': 'transparent'});
					$(this).css({'color':fontColor, 'font-weight':fontOldWeight});
				}
			);
			$('.nav-dropdown').hover(
				function() {
					$(this).css({'background-color': accentColor});
					$('.nav-link', this).css({'color':fontAccent, 'font-weight':fontWeight});
				}, function() {
					$(this).css({'background-color': 'transparent'});
					$('.nav-link', this).css({'color':fontColor, 'font-weight':fontOldWeight});
				}
			);
	}

	function animateDropDown(bgColor) {

		var menu = '.nav-submenu';

		$('.nav-dropdown').hover(
			function() {
				$(menu, this).show();
				$(menu, this).css({'background-color': bgColor});
			}, function() {
				$(menu, this).hide();
			}
		);
	}

	// nav bar animation
	function animateNavBar(w) {
		// check height
		if (w.scrollTop() > headingHeight) {
			// make position fixed + change color
			animateNavColorPosition('fixed', 'white', '#4C4b63', colorDarkPurple, 'white', '600', '600');
			$('#placeholder').css({'display':'block'});

			// dropdown menu
			animateDropDown('#4C4b63');
		} else {
			// make position fixed + change color
			animateNavColorPosition('relative', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0.5)', 'white', colorPurple, '400', '400');
			$('#placeholder').css({'display':'none'});

			// dropdown menu
			animateDropDown('rgba(0, 0, 0, 0.8)');
		}
	}
	
	// on resize
	// on scroll calls
	$(window).scroll(function() {
		// navbar animation
		animateNavBar($(window));
	});

	// on load calls
	animateNavBar($(window));
});



//  ---------- SCRIPTS 2 ---------------------------------------------------------------------


 // Initialise video background
 if (!device.tablet() && !device.mobile()) {
     $(function() {
         $(".player").mb_YTPlayer();
     });
 } else {
     $('body').addClass('mobile');
 }

 // Intro
 $(function() {
     $("#fill-text").wordsrotator({
         words: ['UI Designers', 'Programmers', 'SEO Experts'],
         speed: 4000
     });
 });

 $(function() {
     $('#intro hgroup h1,#scr-down').fadeIn('slow');
 });

 // -----------------Animations (using superscrollorama plugin)------------
 $(document).ready(function() {
     var controller = $.superscrollorama();

     // About section
     controller.addTween('#about', TweenMax.fromTo($('#about h5'), .3, {
         css: {
             opacity: 0,
             'letter-spacing': 0
         },
         immediateRender: true,
         ease: Quad.easeInOut
     }, {
         css: {
             opacity: 1,
             'letter-spacing': '4px'
         },
         ease: Quad.easeInOut
     }), 0, -100);
     controller.addTween('#about', TweenMax.from($('#about h1'), .6, {
         css: {
             top: '50px',
             opacity: 0
         }
     }));
     controller.addTween('#about', TweenMax.from($('#about h4'), .6, {
         css: {
             marginTop: '-50px',
             opacity: 0
         }
     }));

     // Services Title
     controller.addTween('#services', TweenMax.from($('#services>h2 span'), .4, {
         css: {
             top: '35px',
             opacity: 0
         }
     }), 1, -60);
     $('#services article div').css('position', 'relative').each(function() {
         controller.addTween('#services', TweenMax.from($(this), 1, {
             delay: Math.random() * .2,
             css: {
                 left: Math.random() * 200 - 100,
                 top: Math.random() * 200 - 100,
                 opacity: 0
             },
             ease: Back.easeOut
         }));
     });

     // Services section
     controller.addTween(
         '#process article', (new TimelineLite())
         .append([
             TweenMax.from($('#ideate'), .4, {
                 delay: .4,
                 css: {
                     opacity: 0,
                     right: '10%'
                 }
             }),
             TweenMax.from($('#photoshop'), .4, {
                 delay: .45,
                 css: {
                     opacity: 0,
                     right: '20%'
                 }
             }),
             TweenMax.from($('#code'), .4, {
                 delay: .5,
                 css: {
                     opacity: 0,
                     right: '25%'
                 }
             }),
             TweenMax.from($('#optimize'), .3, {
                 delay: .55,
                 css: {
                     opacity: 0,
                     right: '35%'
                 }
             })

         ]),
         1, -200
     );

     // Portfolio
     controller.addTween('#portfolio>h2', TweenMax.fromTo($('#portfolio>h2'), .3, {
         css: {
             opacity: 0,
             'letter-spacing': '40px'
         },
         immediateRender: true,
         ease: Quad.easeInOut
     }, {
         css: {
             opacity: 1,
             'letter-spacing': '0px'
         },
         ease: Quad.easeInOut
     }), 0, -50);
     $('.item').css('position', 'relative').each(function() {

         controller.addTween('#portfolio>h2', TweenMax.from($(this), 1.5, {
             delay: Math.random() * .2,
             css: {
                 left: Math.random() * 200 - 100,
                 top: Math.random() * 200 - 100,
                 opacity: 0
             },
             ease: Back.easeOut
         }));
     });

     // Contact form stroke
     controller.addTween('#contact_form>hr', TweenMax.from($('#contact_form>hr'), .3, {
         css: {
             width: 0
         },
         ease: Quad.easeInOut
     }));
 });

 // Initialize Portfolio
 $("#port-items").diamonds({
     itemSelector: ".item"
 });

 // Google Map for contact section
 window.onload = function() {
     var styles = [{
         featureType: 'water',
         elementType: 'geometry.fill',
         stylers: [{
             color: '#adc9b8'
         }]
     }, {
         featureType: 'landscape.natural',
         elementType: 'all',
         stylers: [{
             hue: '#00aaff'
         }, {
             saturation: '-95'
         }, {
             lightness: 0
         }]
     }, {
         featureType: 'poi',
         elementType: 'geometry',
         stylers: [{
             hue: '#f9e0b7'
         }, {
             lightness: 30
         }]
     }, {
         featureType: 'road',
         elementType: 'geometry',
         stylers: [{
             hue: '#00aaff'
         }, {
             saturation: '-95'
         }, {
             lightness: 14
         }]
     }, ];
     var options = {
         mapTypeControlOptions: {
             mapTypeIds: ['Styled']
         },
         center: new google.maps.LatLng(29.714946132163774, -95.40067778653872),
         zoom: 15,
         streetViewControl: false,
         mapTypeControl: false,
         scrollwheel: false,
         mapTypeId: 'Styled'
     };
     var div = document.getElementById('map');
     var map = new google.maps.Map(div, options);
     var marker_img = 'images/gps_marker.png';
     var marker = new google.maps.Marker({
         position: new google.maps.LatLng(29.7124, -95.4006),
         map: map,
         icon: marker_img,
         title: "Prasanjit Singh"
     });
     var styledMapType = new google.maps.StyledMapType(styles, {
         name: 'Styled'
     });
     map.mapTypes.set('Styled', styledMapType);
 }

 // Smooth scroll for anchor click
 $(function() {
     $('a[href*=#]:not([href=#])').click(function() {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
             var target = $(this.hash);
             target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
             if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                 }, 1000);
                 return false;
             }
         }
     });
 });