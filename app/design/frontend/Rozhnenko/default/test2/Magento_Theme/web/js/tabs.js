require([
    'jquery',
    'accordion'], function ($) {
    $("#my-tabs").accordion({
        active: [0],
        collapsible: true,
        animate: {
            duration: 200,
            easing: 'swing',
        }
    });
});

