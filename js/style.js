$(document).ready(function () {
    $('.slider-one').slick({
        autoplay: true,
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<span class='fa fa-angle-right'></span>",
        prevArrow: "<span class='fa fa-angle-left'></span>",

        responsive: [
            {
                breakpoint: 800,
                settings: {
                    arrows: false,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                }
            }
        ]
    });

    $('.slider-two').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: "<span class='fa fa-angle-right'></span>",
        prevArrow: "<span class='fa fa-angle-left'></span>",

        responsive: [
            {
                breakpoint: 2000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    autoplay: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });
});