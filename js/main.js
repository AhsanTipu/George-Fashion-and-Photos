$(document).ready(function() {
    $("input[type=radio]").uniform();
    $("select").fancySelect();
    $('input[placeholder], textarea[placeholder]').placeholder();
     $('.slider').bxSlider({
        mode:'fade',
        speed:1000,
        touchEnabled: false,
        controls: false,
        auto: true
    });
     $(".item-list li").mouseenter(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeIn(600);
        return false;
     });
      $('.item-list li').mouseleave(function(){  
        $(this).find($('.item-list .hover')).stop(true, true).fadeOut(400);
        return false;
     });
      jQuery(document).on('click', ".menu_trigger", function (e) {
        e.preventDefault()
        window.setTimeout(function() {
            if(jQuery('#nav').hasClass('clicked')){
                jQuery('#nav').stop(true,true).animate({height:'hide'},100);
                jQuery('#nav').removeClass('clicked');
            }else{
                jQuery('#nav').stop(true,true).animate({height:'show'},400);
                jQuery('#nav').addClass('clicked');
            }
        }, 400);
        return false;
    });
    jQuery("#nav").on('click', '.drops', function () {
        if (jQuery(this).hasClass("active")) {
            jQuery(this).removeClass("active").parent().next().slideUp();
        } else {
            jQuery(this).addClass("active").parent().next().slideDown();
        }
        return false;
    });
      
}); 
$(window).resize(function() {
    if($(document).width() > 768){
      $( "#nav" ).addClass("active");
      $( "#nav ul" ).attr('style','');
      $( "#nav" ).attr('style','');
      $( "#nav" ).removeClass("clicked");
      $( "#nav .active" ).removeClass('active');
    }
    else {
        $( "#nav" ).removeClass("active");
    }
});


const posts = document.querySelectorAll('.gallery-item');

posts.forEach(post => {
	post.addEventListener('click', () => {
		//Get original image URL
		const imgUrl = post.firstElementChild.src.split("?")[0];
		//Open image in new tab
		window.open(imgUrl, '_blank');
	});
});

