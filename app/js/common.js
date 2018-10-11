$(document).ready(function() {


    $('.nav-button').click(function (){
        $('.subnav').toggleClass('active');
    });


    $(".tabs__content").not(":first").hide();
    $(".tabs__item").click(function() {
        $(".tabs__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn()
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