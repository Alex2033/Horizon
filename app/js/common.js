$(document).ready(function() {


    $('.nav-button').click(function (){
        $('.subnav').toggleClass('active');
    });


    $(".tabs__content").not(":first").hide();
    $(".subnav-tab").click(function() {
        $(".subnav-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $(".production-content").not(":first").hide();
    $(".production-tab").click(function() {
        $(".production-tab").removeClass("active").eq($(this).index()).addClass("active");
        $(".production-content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.navigation-search__button').click(function() {

        $('.navigation-search__input').css({
            'opacity': '1',
            'visibility': 'visible',
            'width': $('.navigation__container').width() - $('.nav-button').width() - $('.navigation-search__button').width() - 24 + 'px'
        });

        setTimeout(function(){
            $('.navigation-search__button').prop('type', 'submit');
        }, 300);
    });
});

$(document).mouseup(function(e) {
    var container = $('.navigation-search');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('.navigation-search__input').css({
            'width': '0',
            'opacity': '0',
            'visibility': 'hidden'
        });

        $('.navigation-search__button').prop('type', 'button');
    }
});

$(function() {
    $('.hero__slider-list').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.hero__prev'),
        nextArrow: $('.hero__next')
    });
});

$(function() {
    $('.clients-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        prevArrow: $('.clients__prev'),
        nextArrow: $('.clients__next')
    });
});

$(function() {
    $('.testis').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: $('.testimonials__prev'),
        nextArrow: $('.testimonials__next')
    });
});