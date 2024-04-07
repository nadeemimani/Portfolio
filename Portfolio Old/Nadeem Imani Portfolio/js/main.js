;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	
	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 100, 'easeInOutExpo' );
					});
					
				}, 50);
				
			}

		} , { offset: '85%' } );
	};



	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 6,
			lineCap: 'butt',
			barColor: 'rgba(255,255,255,0.7',
			trackColor:	'rgba(255,255,255,0.2)',
			animate: 1000,
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	
	$(function(){
		contentWayPoint();
		goToTop();
		loaderPage();
		fullHeight();
		parallax();
		// pieChart();
		skillsWayPoint();
	});


}());

const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navToggle.addEventListener("click", () => {
	primaryNav.hasAttribute('data-visible')
	? navToggle.setAttribute('aria-expanded', false)
	: navToggle.setAttribute('aria-expanded', true);
 	primaryNav.toggleAttribute("data-visible");
})

const designToggle = document.querySelector(".design-nav-toggle");
const designNav = document.querySelector(".design-navigation");
const marketingToggle = document.querySelector(".marketing-nav-toggle");
const marketingNav = document.querySelector(".marketing-navigation");
const developmentToggle = document.querySelector(".development-nav-toggle");
const developmentNav = document.querySelector(".development-navigation");
const consultingToggle = document.querySelector(".consulting-nav-toggle");
const consultingNav = document.querySelector(".consulting-navigation");
const resumeToggle = document.querySelector(".resume-nav-toggle");
const resumeNav = document.querySelector(".resume-navigation");
const portfolioToggle = document.querySelector(".portfolio-nav-toggle");
const portfolioNav = document.querySelector(".portfolio-navigation");

designToggle.addEventListener("click", () => {
	designNav.hasAttribute('data-visible')
	? designToggle.setAttribute('aria-expanded', false)
	: designToggle.setAttribute('aria-expanded', true),
	marketingNav.hasAttribute('data-visible')
	? marketingToggle.setAttribute('aria-expanded', false)
	: marketingToggle.setAttribute('aria-expanded', true),
	developmentNav.hasAttribute('data-visible')
	? developmentToggle.setAttribute('aria-expanded', false)
	: developmentToggle.setAttribute('aria-expanded', true),
	consultingNav.hasAttribute('data-visible')
	? consultingToggle.setAttribute('aria-expanded', false)
	: consultingToggle.setAttribute('aria-expanded', true),
	portfolioNav.hasAttribute('data-visible')
	? portfolioToggle.setAttribute('aria-expanded', false)
	: portfolioToggle.setAttribute('aria-expanded', true),
	resumeNav.hasAttribute('data-visible')
	? resumeToggle.setAttribute('aria-expanded', false)
	: resumeToggle.setAttribute('aria-expanded', true);
	designNav.toggleAttribute("data-visible" , false),
	marketingNav.toggleAttribute("data-visible", true),
	developmentNav.toggleAttribute("data-visible", true),
	consultingNav.toggleAttribute("data-visible", true),
	portfolioNav.toggleAttribute("data-visible", true),
	resumeNav.toggleAttribute("data-visible", true),
	designToggle.toggleAttribute("nohighlight", false),
	marketingToggle.toggleAttribute("nohighlight", true),
	developmentToggle.toggleAttribute("nohighlight", true),
	consultingToggle.toggleAttribute("nohighlight", true),
	portfolioToggle.toggleAttribute("nohighlight", true),
	resumeToggle.toggleAttribute("nohighlight", true);
})

marketingToggle.addEventListener("click", () => {
	marketingNav.hasAttribute('data-visible')
	? marketingToggle.setAttribute('aria-expanded', false)
	: marketingToggle.setAttribute('aria-expanded', true),
	designNav.hasAttribute('data-visible')
	? designToggle.setAttribute('aria-expanded', false)
	: designToggle.setAttribute('aria-expanded', true),
	developmentNav.hasAttribute('data-visible')
	? developmentToggle.setAttribute('aria-expanded', false)
	: developmentToggle.setAttribute('aria-expanded', true),
	consultingNav.hasAttribute('data-visible')
	? consultingToggle.setAttribute('aria-expanded', false)
	: consultingToggle.setAttribute('aria-expanded', true),
	portfolioNav.hasAttribute('data-visible')
	? portfolioToggle.setAttribute('aria-expanded', false)
	: portfolioToggle.setAttribute('aria-expanded', true),
	resumeNav.hasAttribute('data-visible')
	? resumeToggle.setAttribute('aria-expanded', false)
	: resumeToggle.setAttribute('aria-expanded', true);
	marketingNav.toggleAttribute("data-visible", false),
	designNav.toggleAttribute("data-visible", true),
	developmentNav.toggleAttribute("data-visible", true),
	consultingNav.toggleAttribute("data-visible", true),
	resumeNav.toggleAttribute("data-visible", true),
	portfolioNav.toggleAttribute("data-visible", true),
	designToggle.toggleAttribute("nohighlight", true),
	marketingToggle.toggleAttribute("nohighlight", false),
	developmentToggle.toggleAttribute("nohighlight", true),
	consultingToggle.toggleAttribute("nohighlight", true),
	portfolioToggle.toggleAttribute("nohighlight", true),
	resumeToggle.toggleAttribute("nohighlight", true);
})

developmentToggle.addEventListener("click", () => {
	developmentNav.hasAttribute('data-visible')
	? developmentToggle.setAttribute('aria-expanded', false)
	: developmentToggle.setAttribute('aria-expanded', true),
	marketingNav.hasAttribute('data-visible')
	? marketingToggle.setAttribute('aria-expanded', false)
	: marketingToggle.setAttribute('aria-expanded', true),
	designNav.hasAttribute('data-visible')
	? designToggle.setAttribute('aria-expanded', false)
	: designToggle.setAttribute('aria-expanded', true),
	consultingNav.hasAttribute('data-visible')
	? consultingToggle.setAttribute('aria-expanded', false)
	: consultingToggle.setAttribute('aria-expanded', true),
	portfolioNav.hasAttribute('data-visible')
	? portfolioToggle.setAttribute('aria-expanded', false)
	: portfolioToggle.setAttribute('aria-expanded', true),
	resumeNav.hasAttribute('data-visible')
	? resumeToggle.setAttribute('aria-expanded', false)
	: resumeToggle.setAttribute('aria-expanded', true);
	developmentNav.toggleAttribute("data-visible", false),
	marketingNav.toggleAttribute("data-visible", true),
	designNav.toggleAttribute("data-visible", true),
	consultingNav.toggleAttribute("data-visible", true),
	resumeNav.toggleAttribute("data-visible", true),
	portfolioNav.toggleAttribute("data-visible", true),
	designToggle.toggleAttribute("nohighlight", true),
	marketingToggle.toggleAttribute("nohighlight", true),
	developmentToggle.toggleAttribute("nohighlight", false),
	consultingToggle.toggleAttribute("nohighlight", true),
	portfolioToggle.toggleAttribute("nohighlight", true),
	resumeToggle.toggleAttribute("nohighlight", true);
})

consultingToggle.addEventListener("click", () => {
	consultingNav.hasAttribute('data-visible')
	? consultingToggle.setAttribute('aria-expanded', false)
	: consultingToggle.setAttribute('aria-expanded', true),
	developmentNav.hasAttribute('data-visible')
	? developmentToggle.setAttribute('aria-expanded', false)
	: developmentToggle.setAttribute('aria-expanded', true),
	marketingNav.hasAttribute('data-visible')
	? marketingToggle.setAttribute('aria-expanded', false)
	: marketingToggle.setAttribute('aria-expanded', true),
	designNav.hasAttribute('data-visible')
	? designToggle.setAttribute('aria-expanded', false)
	: designToggle.setAttribute('aria-expanded', true),
	portfolioNav.hasAttribute('data-visible')
	? portfolioToggle.setAttribute('aria-expanded', false)
	: portfolioToggle.setAttribute('aria-expanded', true),
	resumeNav.hasAttribute('data-visible')
	? resumeToggle.setAttribute('aria-expanded', false)
	: resumeToggle.setAttribute('aria-expanded', true);
	consultingNav.toggleAttribute("data-visible", false),
	developmentNav.toggleAttribute("data-visible", true),
	marketingNav.toggleAttribute("data-visible", true),
	designNav.toggleAttribute("data-visible", true),
	resumeNav.toggleAttribute("data-visible", true),
	portfolioNav.toggleAttribute("data-visible", true),
	designToggle.toggleAttribute("nohighlight", true),
	marketingToggle.toggleAttribute("nohighlight", true),
	developmentToggle.toggleAttribute("nohighlight", true),
	consultingToggle.toggleAttribute("nohighlight", false),
	portfolioToggle.toggleAttribute("nohighlight", true),
	resumeToggle.toggleAttribute("nohighlight", true);
})

resumeToggle.addEventListener("click", () => {
	resumeNav.hasAttribute('data-visible')
	? resumeToggle.setAttribute('aria-expanded', false)
	: resumeToggle.setAttribute('aria-expanded', true);
	consultingNav.hasAttribute('data-visible')
	? consultingToggle.setAttribute('aria-expanded', false)
	: consultingToggle.setAttribute('aria-expanded', true),
	developmentNav.hasAttribute('data-visible')
	? developmentToggle.setAttribute('aria-expanded', false)
	: developmentToggle.setAttribute('aria-expanded', true),
	marketingNav.hasAttribute('data-visible')
	? marketingToggle.setAttribute('aria-expanded', false)
	: marketingToggle.setAttribute('aria-expanded', true),
	portfolioNav.hasAttribute('data-visible')
	? portfolioToggle.setAttribute('aria-expanded', false)
	: portfolioToggle.setAttribute('aria-expanded', true),
	designNav.hasAttribute('data-visible')
	? designToggle.setAttribute('aria-expanded', false)
	: designToggle.setAttribute('aria-expanded', true);
	consultingNav.toggleAttribute("data-visible", true),
	developmentNav.toggleAttribute("data-visible", true),
	marketingNav.toggleAttribute("data-visible", true),
	designNav.toggleAttribute("data-visible", true),
	resumeNav.toggleAttribute("data-visible", false),
	portfolioNav.toggleAttribute("data-visible", true),
	designToggle.toggleAttribute("nohighlight", true),
	marketingToggle.toggleAttribute("nohighlight", true),
	developmentToggle.toggleAttribute("nohighlight", true),
	consultingToggle.toggleAttribute("nohighlight", true),
	portfolioToggle.toggleAttribute("nohighlight", true),
	resumeToggle.toggleAttribute("nohighlight", false);
})

portfolioToggle.addEventListener("click", () => {
	portfolioNav.hasAttribute('data-visible')
	? portfolioToggle.setAttribute('aria-expanded', false)
	: portfolioToggle.setAttribute('aria-expanded', true),
	resumeNav.hasAttribute('data-visible')
	? resumeToggle.setAttribute('aria-expanded', false)
	: resumeToggle.setAttribute('aria-expanded', true);
	consultingNav.hasAttribute('data-visible')
	? consultingToggle.setAttribute('aria-expanded', false)
	: consultingToggle.setAttribute('aria-expanded', true),
	developmentNav.hasAttribute('data-visible')
	? developmentToggle.setAttribute('aria-expanded', false)
	: developmentToggle.setAttribute('aria-expanded', true),
	marketingNav.hasAttribute('data-visible')
	? marketingToggle.setAttribute('aria-expanded', false)
	: marketingToggle.setAttribute('aria-expanded', true),
	designNav.hasAttribute('data-visible')
	? designToggle.setAttribute('aria-expanded', false)
	: designToggle.setAttribute('aria-expanded', true);
	consultingNav.toggleAttribute("data-visible", true),
	developmentNav.toggleAttribute("data-visible", true),
	marketingNav.toggleAttribute("data-visible", true),
	designNav.toggleAttribute("data-visible", true),
	resumeNav.toggleAttribute("data-visible", true),
	portfolioNav.toggleAttribute("data-visible", false),
	designToggle.toggleAttribute("nohighlight", true),
	marketingToggle.toggleAttribute("nohighlight", true),
	developmentToggle.toggleAttribute("nohighlight", true),
	consultingToggle.toggleAttribute("nohighlight", true),
	portfolioToggle.toggleAttribute("nohighlight", false),
	resumeToggle.toggleAttribute("nohighlight", true);
	
})

// Horizontal Scroll

const container = document.getElementById("competencies");
  container.addEventListener("wheel", function (e) {
    if (e.deltaY > 0) {
      container.scrollLeft += 100;
      e.preventDefault();
    }
    else {
      container.scrollLeft -= 100;
      e.preventDefault();
    }
  });

// // Sroll Infinite

// $(window).on('load', function(){
// 	// Please run it with window.onload, not with document.ready
// 	initSmoothScrolling('.block','smoothscroll');
//   });
  
//   function initSmoothScrolling(container,animation){
//    /*
// 	  * @param {String} container Class or ID of the animation container
// 	  * @param {String} animation Name of the animation, e.g. smoothscroll
// 	  */
// 	  var sliderWidth = 0;	
// 	  var animationWidth = 0;	
// 	  var sliderHeight = $('>div>div:first-of-type',container).outerHeight(false);
  
// 	  $('>div>div', container).each(function(){				
// 		  animationWidth += $(this).outerWidth(false);		
// 	  });
	  
// 	  // detect number of visible slides
// 	  var slidesVisible = $(container).width() / $('>div>div:first-of-type',container).outerWidth(false);	
// 	  slidesVisible = Math.ceil(slidesVisible);
  
// 	// count slides to determine animation speed
// 	  var slidesNumber = $('>div>div', container).length;
// 	  var speed = slidesNumber*10;
	  
//   // append the tail	
// 	  $('>div>div',container).slice(0,slidesVisible).clone().appendTo($('>div',container));	
  
// 	  // Detect the slider width with appended tail
// 	  $('>div>div', container).each(function(){
// 		  sliderWidth += $(this).outerWidth(false);
// 	  });
  
// 	  // set slider dimensions
// 	  $('>div',container).css({'width':sliderWidth,'height':sliderHeight});
	
//   // Insert styles to html
// 	  $("<style type='text/css'>@keyframes "+animation+" { 0% { margin-left: 0px; } 100% { margin-left: -"+animationWidth+"px; } } "+$('>div>div:first-of-type',container).selector+" { -webkit-animation: "+animation+" "+speed+"s linear infinite; -moz-animation: "+animation+" "+speed+"s linear infinite; -ms-animation: "+animation+" "+speed+"s linear infinite; -o-animation: "+animation+" "+speed+"s linear infinite; animation: "+animation+" "+speed+"s linear infinite; }</style>").appendTo("head");	
  
// 	  // restart the animation (e.g. for safari & ie)	
// 	  var cl = $(container).attr("class");
// 	  $(container).removeClass(cl).animate({'nothing':null}, 1, function () {
// 		  $(this).addClass(cl);
// 	  });
	  

	  
//   }