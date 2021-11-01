$(function () {
    const navToggler = $('.navbar-toggler');

    navToggler.on('click', function () {
        navToggler.toggleClass('navbar-toggler--active');
    });

    const reviewsSlider = $('.reviews__slider-items');
    reviewsSlider.slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },

            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    const masterSlider = $('.master__slider-items'),
        masterNum = $('.master__num');

    masterSlider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        rtl: true,
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true
    });

    masterSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // индекс текущего слайда

        let slideIndex = nextSlide;
        slideIndex = slideIndex < 4 ? slideIndex + 1 : 1;

        masterNum.text(slideIndex < 10 ? '0' + slideIndex : slideIndex);
    });


    const worksSlider = $('.works__slider-items'),
        worksNum = $('.works__num');

    worksSlider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        speed: 300,
        variableWidth: true
    });

    worksSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        // индекс текущего слайда

        let slideIndex = nextSlide;
        slideIndex = slideIndex < 4 ? slideIndex + 1 : 1;

        worksNum.text(slideIndex < 10 ? '0' + slideIndex : slideIndex);
    });

});
