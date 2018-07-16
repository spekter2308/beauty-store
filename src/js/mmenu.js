$(document).ready(function() {
    $("#my-menu").mmenu({
       extensions: ['widescrean', 'theme-black', 'position-right'],
       navbar: {
           title: '<img src="images/logo-1.svg" alt="Салон краси Mitler">'
       },
    })

    var api = $('#my-menu').data('mmenu');
	api.bind('open:start', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:start', function() {
        $('.hamburger').removeClass('is-active');
    });

    $('.carousel-service').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
        responsiveClass: true,
        dots: false,
        responsive: {
            0: {items: 1},
            800: {items: 2},
            1100: {items: 3}
        }
    });

    $('.rewiews').owlCarousel({
        loop: true,
        items: 1,
        smartSpeed: 700,
        autoHeight: true,
    });

    $('.partners').owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        smartSpeed: 700,
        responsiveClass: true,
        responsive: {
            0: {items: 1},
            768: {items: 2},
            992: {items: 3},
            1200: {items: 4}
        }
    });

//height of elements
    $('.carousel-service').on('initialized.owl.carousel', function(){

    });
    function carouselService(){
		$('.carousel-service-item').each(function(){

			$(this).find('.carousel-service-image').css('min-height', $(this).find('.carousel-service-content').outerHeight( true ));
		});
    };setTimeout(function(){
        carouselService()
    }, 500)

//highlight last and first words for <span>
    $('.carousel-service-composition h3').each(function(){
		$(this).html($(this).html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });
    $('.s-king h2').each(function(){
		$(this).html($(this).html().replace(/(\S+)/, '<span>$1</span>'));
    });
    $('.s-rewiews h2').each(function(){
		$(this).html($(this).html().replace(/(\S+)/, '<span>$1</span>'));
    });

//Buttons 'prev' and 'next'
    $('.owl-carousel').find('.owl-nav').removeClass('disabled');
        $('.owl-carousel').on('changed.owl.carousel', function(event) {
            $(this).find('.owl-nav').removeClass('disabled');
     });

$('select').selectize({
    create: true
})

//E-mail Ajax Send
$("form.callback").submit(function() { //Change
    var th = $(this);
    $.ajax({
        type: "POST",
        url: "mail.php", //Change
        data: th.serialize()
    }).done(function() {
        //alert("Thank you!");
        $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
        setTimeout(function() {
            $(th).find('.success').removeClass('active').fadeOut();
            // Done Functions
            th.trigger("reset");
        }, 3000);
    });
    return false;
});

//scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
        $('.top').addClass('active');
    } else {
        $('.top').removeClass('active');
    }
})
$('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
})


//Resize Window
$('.carousel-service-content').equalHeight({
    updateOnDOMLoad: true,
    //resizeTimeout: 40
  })

})

//load page
$(window).on('load', function(){
	$('.preloader').fadeOut('slow');
})