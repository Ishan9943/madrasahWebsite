(function($) {
"use strict";
jQuery(window).on('scroll', function() {
         if ($(this).scrollTop() > 100) {
             $('.header').addClass("sticky"); 
            } else { 
                $('.header').removeClass("sticky"); 
            } });
$('.menu').slicknav({
    prependTo : ".mobile-menu",
    duration : 600,
    closeOnClick : true,
});
$('.hero-slider').owlCarousel({
    autoplay : true,
    autoplayTimeout : 3500,
    autoplayHoverPause : true,
    items : 1,
    smartSpeed : 600,
    loop : true,
    merge : true,
    nav : true,
    dots : false,
    navText : [ '<i class="far fa-angle-left" aria-hidden="true"></i>', '<i class="far fa-angle-right" aria-hidden="true"></i>' ],
    responsive : {
        300 : {
            nav : false,
        },
        768 : {
            nav : false,
        },
        1170 : {
            nav : true,
        },
    }
});
$('.circle').circleProgress({fill : {color : '#00B16A'}})
$('.course-slider').owlCarousel({items : 3, autoplay : true, autoplayTimeout : 3500, smartSpeed : 600, autoplayHoverPause : true, loop : true, merge : true, dots : false, nav : true, navText : [ '<i class="far fa-angle-left" aria-hidden="true"></i>', '<i class="far fa-angle-right" aria-hidden="true"></i>' ], responsive : {
                                     300 : {
                                         items : 1,
                                         nav : false,
                                     },
                                     480 : {
                                         items : 2,
                                         nav : false,
                                     },
                                     768 : {
                                         items : 2,
                                         nav : false,
                                     },
                                     1170 : {
                                         items : 3,
                                     },
                                 }});
$('.testimonial-slider').owlCarousel({autoplay : true, autoplayTimeout : 3500, smartSpeed : 600, autoplayHoverPause : true, margin : 25, loop : true, merge : true, center : false, nav : true, dots : false, responsive : {
                                          300 : {
                                              items : 1,
                                              nav : false,
                                          },
                                          480 : {
                                              items : 1,
                                              nav : false,
                                          },
                                          768 : {
                                              items : 2,
                                              nav : false,
                                          },
                                          1170 : {
                                              items : 2,
                                          },
                                      }});
$('.event-slider').owlCarousel({autoplay : true, autoplayTimeout : 3500, smartSpeed : 600, autoplayHoverPause : true, margin : 25, loop : true, merge : true, nav : true, dots : false, navText : [ '<i class="far fa-angle-left" aria-hidden="true"></i>', '<i class="far fa-angle-right" aria-hidden="true"></i>' ], responsive : {
                                    300 : {
                                        items : 1,
                                        nav : false,
                                    },
                                    480 : {
                                        items : 2,
                                        nav : false,
                                    },
                                    768 : {
                                        items : 2,
                                        nav : false,
                                    },
                                    1170 : {
                                        items : 3,
                                    },
                                }});
$('.counter').counterUp({delay : 10, time : 4000});
$('.blog-slider').owlCarousel({items : 2, autoplay : false, autoplayTimeout : 3500, smartSpeed : 600, autoplayHoverPause : true, margin : 15, loop : true, merge : true, nav : true, navText : [ '<i class="far fa-angle-left" aria-hidden="true"></i>', '<i class="far fa-angle-right" aria-hidden="true"></i>' ], dots : true, responsive : {
                                   300 : {
                                       items : 1,
                                       nav : false,
                                   },
                                   480 : {
                                       items : 2,
                                       nav : false,
                                   },
                                   768 : {
                                       items : 2,
                                       nav : false,
                                   },
                                   1170 : {
                                       items : 3,
                                   },
                               }});
$('.client-slider').owlCarousel({items : 5, autoplay : true, autoplayTimeout : 3500, smartSpeed : 600, autoplayHoverPause : true, margin : 15, loop : true, merge : true, nav : false, dots : false, navText : [ '<i class="far fa-angle-left" aria-hidden="true"></i>', '<i class="far fa-angle-right" aria-hidden="true"></i>' ], responsive : {
                                     300 : {
                                         items : 1,
                                         nav : false,
                                     },
                                     480 : {
                                         items : 2,
                                         nav : false,
                                     },
                                     768 : {
                                         items : 2,
                                         nav : false,
                                     },
                                     1170 : {
                                         items : 5,
                                     },
                                 }});
$('.panel').on('click', function() { $(".panel").removeClass("active"); $(this).addClass("active"); });
$('.video-popup').magnificPopup({type : 'iframe', removalDelay : 300, mainClass : 'mfp-fade'});
$(document).on('ready', function() { $(window).stellar({responsive : true, positionProperty : 'position', horizontalOffset : 0, verticalOffset : 0, horizontalScrolling : false}); });
var window_width = $(window).width();
if (window_width > 767)
{
    new WOW().init();
}
$.scrollUp({scrollName : 'scrollUp', scrollDistance : 300, scrollFrom : 'top', scrollSpeed : 1000, animation : 'fade', animationSpeed : 200, scrollTrigger : false, scrollTarget : false, easing : 'easeInOutQuart', scrollText : [ "<i class='far fa-angle-up'></i>" ], scrollTitle : false, scrollImg : false, activeOverlay : false, zIndex : 1});
$(".search_btn", this).on("click", function(e) { e.preventDefault(); $(".header_search_content").toggleClass("on"); });
$(".header_search_content_inner .close_btn").on("click", function(e) { e.preventDefault(); $(".header_search_content").removeClass("on"); });
$(window).on('load', function() { $('.preloader').fadeOut('slow', function() { $(this).remove(); }); });
})(jQuery);
