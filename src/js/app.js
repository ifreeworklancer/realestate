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
    $('.btn-open-price-modal').on('click', function (e) {
        e.preventDefault();
        $('.modal-price').addClass('is-active');
        $('.modal-mask').addClass('is-active');
    })

    $('#close-modal-price').on('click', function () {
        $('.modal-price').removeClass('is-active');
        $('.modal-mask').removeClass('is-active');
    })

    $('.modal-mask').on('click', function () {
        $('.modal-price').removeClass('is-active');
        $('.modal-mask').removeClass('is-active');
    });

    /** Mobile check */
    window.mobilecheck = function () {
        var check = false;
        (function (a) {
            if (
                /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
                    a
                ) ||
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                    a.substr(0, 4)
                )
            )
                check = true;
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };

    if (!mobilecheck()) {
        let $video = $('.video-container');
        const $link = $video.data('src');
        $video.html('<video src="' + $link + '" loop muted autoplay></video>')
    }

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