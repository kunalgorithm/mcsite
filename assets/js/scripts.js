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



//  ---------- video code below
var tag = document.createElement('script');
		tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
		playerDefaults = {autoplay: 0, autohide: 1, modestbranding: 0, rel: 0, showinfo: 0, controls: 0, disablekb: 1, enablejsapi: 0, iv_load_policy: 3};
var vid = [
			// {'videoId': '2b5QNj-BVhs', 'startSeconds': 515, 'endSeconds': 690, 'suggestedQuality': 'hd720'},
			// {'videoId': '9ge5PzHSS0Y', 'startSeconds': 465, 'endSeconds': 657, 'suggestedQuality': 'hd720'},
			{'videoId': 'b-0KqpO35Rc', 'startSeconds': 0, 'endSeconds': 240, 'suggestedQuality': 'hd720'},
			// {'videoId': 'qMR-mPlyduE', 'startSeconds': 19, 'endSeconds': 241, 'suggestedQuality': 'hd720'}
		],
		randomVid = Math.floor(Math.random() * vid.length),
    currVid = randomVid;

$('.hi em:last-of-type').html(vid.length);

function onYouTubePlayerAPIReady(){
  tv = new YT.Player('tv', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}, playerVars: playerDefaults});
}

function onPlayerReady(){
  tv.loadVideoById(vid[currVid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1){
    $('#tv').addClass('active');
    $('.hi em:nth-of-type(2)').html(currVid + 1);
  } else if (e.data === 2){
    $('#tv').removeClass('active');
    if(currVid === vid.length - 1){
      currVid = 0;
    } else {
      currVid++;  
    }
    tv.loadVideoById(vid[currVid]);
    tv.seekTo(vid[currVid].startSeconds);
  }
}

function vidRescale(){

  var w = $(window).width()+200,
    h = $(window).height()+200;

  if (w/h > 16/9){
    tv.setSize(w, w/16*9);
    $('.tv .screen').css({'left': '0px'});
  } else {
    tv.setSize(h/9*16, h);
    $('.tv .screen').css({'left': -($('.tv .screen').outerWidth()-w)/2});
  }
}

$(window).on('load resize', function(){
  vidRescale();
});

$('.hi span:first-of-type').on('click', function(){
  $('#tv').toggleClass('mute');
  $('.hi em:first-of-type').toggleClass('hidden');
  if($('#tv').hasClass('mute')){
    tv.mute();
  } else {
    tv.unMute();
  }
});

$('.hi span:last-of-type').on('click', function(){
  $('.hi em:nth-of-type(2)').html('~');
  tv.pauseVideo();
});
