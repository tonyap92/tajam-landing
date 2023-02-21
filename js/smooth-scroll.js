$(document).ready(function() {
	$('.mobile-nav__link, .main-nav__link').on( 'click', function(){ 
		var el = $(this);
		var dest = el.attr('href');
		if(dest !== undefined && dest !== '') {
			$('html').animate({ 
				scrollTop: $(dest).offset().top - 80
			}, 500
			);
		}
		return false;
	});
});