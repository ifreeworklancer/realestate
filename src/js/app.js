import jquery from 'jquery';
import Flickity from 'flickity';

window.jQuery = window.$ = jquery;

import 'flickity/dist/flickity.css';

(function () {

    /**
     * Burger-menu
     */
    $('.burger-menu').click(function () {
        var menu = $('.menu');
        $(this).toggleClass('active');
        if (menu.is(':visible')) {
            menu.slideUp();
            $('.burger-menu-title').text("Меню");
        } else {
            menu.slideDown();
            $(menu).css("display", 'flex');
            $('.burger-menu-title').text("Закрыть");
        }
    });

    /**
     * Menu fixed
     */
    var windowHeight = $(window).height();

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= $('#helpers').offset().top) {
            $('#app-header').addClass('is-fixed');
        } else {
            $('#app-header').removeClass('is-fixed');
        }
    })


    /**
     * Form-label
     */

    $('.form-control').on('focus', function () {
        $(this).parent().addClass('in-focus');
    });

    $('.form-control').on('blur', function () {
        if ($(this).val() !== "") {
            $(this).parent().addClass('in-focus');
        } else {
            $(this).parent().removeClass('in-focus');
        }
    });

    /**
     * Scroll Link
     */
    $(".scroll-link").on("click", function (event) {
        event.preventDefault();

        $('.menu').slideUp();
        $('.burger-menu-title').text("Меню");

        var id = $(this).attr('href');

        if (id.length > 1) {

            var top = $(id).offset().top;

            $('body,html').animate({
                scrollTop: top
            }, 1500);
        }
    });

    /**
     * Modal
     */
    $('.btn-open-price-modal').on('click', function(e) {
        e.preventDefault();
        $('.modal-price').addClass('is-active');
        $('.modal-mask').addClass('is-active');
    })

    $('#close-modal-price').on('click', function() {
        $('.modal-price').removeClass('is-active');
        $('.modal-mask').removeClass('is-active');
    })

    $('.modal-mask').on('click', function() {
        $('.modal-price').removeClass('is-active');
        $('.modal-mask').removeClass('is-active');
    });

})(jQuery)

/**
 * Sliders teams
 */
if ($('.teams-slider')) {
    var elem1 = document.querySelector('.teams-slider');
    if (elem1) {

        const flkty1 = new Flickity(elem1, {
            prevNextButtons: false,
            cellAlign: 'left',
            contain: true,
        });


        var prevArrowTeams = document.querySelector('.slider-arrow-item--teams-left');

        prevArrowTeams.addEventListener('click', function () {
            flkty1.previous(false, false);
        });

        var nextArrowTeams = document.querySelector('.slider-arrow-item--teams-right');

        nextArrowTeams.addEventListener('click', function () {
            flkty1.next(false, false);
        });

    }
}


/**
 * Sliders reviews
 */
if ($('.reviews-slider')) {
    var elem2 = document.querySelector('.reviews-slider');
    if (elem2) {

        const flkty2 = new Flickity(elem2, {
            prevNextButtons: false,
            cellAlign: 'center',
            contain: true,
        });


        var prevArrowReviews = document.querySelector('.slider-arrow-item--reviews-left');

        prevArrowReviews.addEventListener('click', function () {
            flkty2.previous(false, false);
        });

        var nextArrowReviews = document.querySelector('.slider-arrow-item--reviews-right');

        nextArrowReviews.addEventListener('click', function () {
            flkty2.next(false, false);
        });

    }
}

/**
 * Sliders header-banner
 */
if ($('.header-banner-slider')) {
    var elem3 = document.querySelector('.header-banner-slider');
    if (elem3) {

        const flkty3 = new Flickity(elem3, {
            prevNextButtons: false,
            cellAlign: 'center',
            contain: true,
            draggable: false
        });


        var prevArrowTeams = document.querySelector('.slider-arrow-item--header-banner-left');
        var indexSliderReviews = document.querySelector('.header-slider-nav-index');
        indexSliderReviews.innerText = flkty3.selectedIndex + 1;


        prevArrowTeams.addEventListener('click', function () {
            flkty3.previous(false, false);
            indexSliderReviews.innerText = flkty3.selectedIndex + 1;
        });

        var nextArrowTeams = document.querySelector('.slider-arrow-item--header-banner-right');

        nextArrowTeams.addEventListener('click', function () {
            flkty3.next(false, false);
            indexSliderReviews.innerText = flkty3.selectedIndex + 1;
        });


        var cellElementsReviews = flkty3.getCellElements().length;
        var lastSliderReviews = document.querySelector('.header-slider-nav-last');

        lastSliderReviews.innerText = cellElementsReviews;
    }
}