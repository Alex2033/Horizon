$(document).ready(function() {


    $('.nav-button').click(function (){
        $('.subnav').toggleClass('active');
    });


    $(".tabs__content").not(":first").hide();
    $(".tabs__item").click(function() {
        $(".tabs__item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tabs__content").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

});
