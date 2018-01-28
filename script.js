    var swiper = new Swiper('.header-gallery', {
      loop: true,
      spaceBetween: 30,
      effect: 'fade',
  	autoplay: true,
  	speed: 3000,
    });

$( document ).ready(function(){
	if($(window).innerWidth() < 768){
			var mySwiper = new Swiper('.all_production', {
		    speed: 400,
		    spaceBetween: 100
		});
	}
});