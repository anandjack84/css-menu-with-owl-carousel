//WOW SCRIPT

new WOW().init();

//NAV LI CLICK SMOOTH SCROll

$(document).ready(function($) {
	$('.menu li a').click(function() {  
		$('html, body').animate({scrollTop: $(this.hash).offset().top -1}, 1000);
		return false;
	});
		
});




//OWL-CAROUSEL


$(function() {
$('.owl-carousel').owlCarousel({
    loop:true,
    lazyLoad:true,
    margin:1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplaySpeed:1000,
    touchDrag  : true,
    mouseDrag  : true,
    responsiveClass:true,
    responsive:{
        1366:{
            items:1,
            nav:false
        },
        1024:{
            items:1,
            nav:false
        },
        640:{
            items:1,
            nav:false
        },
        0:{
            items:1,
            nav:false
        }
    }
})
});

