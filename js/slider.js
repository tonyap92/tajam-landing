$('.page-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 7000
});


$('.reviews-info').slick({
    asNavFor: '.reviews-dots',
    autoplay: true,
    autoplaySpeed: 7000,
    fade: true,
    arrows: false
});

$('.reviews-dots').slick({
    asNavFor: '.reviews-info',
    slidesToShow: 5,
    arrows: false,
    focusOnSelect: true
});