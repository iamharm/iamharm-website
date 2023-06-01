$(document).ready(function(){
    
    var videoObject = $('.modal-content');

    $('.video-trigger').on('click', function(){
      videoObject.attr('src', $(this).data('video'));
      $('.iframe-pop').addClass('iframe-visible');
    });
  
     $('.modal-close').on('click', function(){
      videoObject.attr('src', '');
      $('.iframe-pop').removeClass('iframe-visible');
    });
  
    $('.iframe-pop').on('click', function(){
      videoObject.attr('src', '');
      $('.iframe-pop').removeClass('iframe-visible');
    });
  
});

jQuery(document).ready(function($) {

  $('.ds-slider').slick({
	    dots: false,
	    infinite: true,
	    arrows: false,
	    speed: 600,
	    centerMode: true,
	  	slidesToShow: 4,
	  	prevArrow:"<button type='button' class='slick-prev slick-arrow'><i class='ri-arrow-left-line' ></i></button>",
	  	nextArrow:"<button type='button' class='slick-next slick-arrow'><i class='ri-arrow-right-line'></i></button>",
	  	responsive: [
			{
	  	      breakpoint: 1280,
	  	      settings: {
	  	        slidesToShow: 4,
	  	        infinite: true,
	  	        dots: true
	  	      }
	  	    },
			{
	  	      breakpoint: 1024,
	  	      settings: {
	  	        slidesToShow: 3,
	  	        infinite: true,
	  	        dots: true
	  	      }
	  	    },
	  	    {
	  	      breakpoint: 768,
	  	      settings: {
	  	        slidesToShow: 1,
	  	      }
	  	    },
	  	    {
	  	      breakpoint: 480,
	  	      settings: {
	  	        slidesToShow: 1,
	  	      }
	  	    }
	  	    // You can unslick at a given breakpoint now by adding:
	  	    // settings: "unslick"
	  	    // instead of a settings object
	  	  ]
  });
   

});