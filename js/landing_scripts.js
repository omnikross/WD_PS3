$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $(".scroller").fadeIn();
        } else {
            $(".scroller").fadeOut();
        }
    });

    $(".scroller").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    $("#header").on("click", "button", function() {
        var id = $(this).attr("href");
        var top = $(id).offset().top;
        var heightOffset = ($(window).height() - $(id).height()) / 2;
        if (heightOffset < 0) {
            heightOffset = 0;
        } 
        var centerTop = top - heightOffset; 
        $('body,html').animate({scrollTop: centerTop}, 1500);
    });
}); 



