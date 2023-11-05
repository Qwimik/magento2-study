define(["jquery", "slick"], function ($) {
    $(".custom-slick").slick({
        arrows: false,
        dots: true,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $(".custom-slick").css("width", "300px");
});
