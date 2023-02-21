$(document).ready(function() {
    $(".icon-menu-mobile").click(function() {
        $(".mobile-nav").toggleClass("mobile-nav_active");
        $("html, body").toggleClass("scroll-hidden");
				$('html').animate({ 
					scrollTop: 0
				}, 100
				);
    });

		$(".mobile-nav__link").click(function() {
			$(".mobile-nav").toggleClass("mobile-nav_active");
			$("html, body").toggleClass("scroll-hidden");
		});
});