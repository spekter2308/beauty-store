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

})
