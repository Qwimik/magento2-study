define(['jquery', 'slick'], function ($) {
    'use strict';

    $(document).ready(function () {
        $('.product-items').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            horizontal: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    });
});


