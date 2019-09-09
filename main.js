$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
            console.log($(window).scrollTop())

        if($(window).scrollTop() > 0 && $(window).scrollTop() < 600) {
            $(".photo").css({top: (600 - $(window).scrollTop())/3 + 'px'});
            $(".description h2").css({opacity: 0});
            $(".description h3").css({opacity: 0});
            $(".description hr").css({opacity: 0});
            $(".description p").css({opacity: 0});
            $(".skills h2").css({opacity: 0});
            $(".skills hr").css({opacity: 0});
            $(".W800").css({opacity: (($(window).scrollTop() - 600)/200) });
        }
        if($(window).scrollTop() > 600 && $(window).scrollTop() < 800) {
            $(".description h2").css({opacity: (($(window).scrollTop() - 600)/200) });
            $(".description h3").css({opacity: (($(window).scrollTop() - 600)/200) });
            $(".description hr").css({opacity: (($(window).scrollTop() - 600)/200) });
            $(".description p").css({opacity: (($(window).scrollTop() - 600)/200) });
            $(".skills h2").css({opacity: (($(window).scrollTop() - 600)/200) });
            $(".skills hr").css({opacity: (($(window).scrollTop() - 600)/200) });
            $(".W800").css({opacity: (($(window).scrollTop() - 600)/200) });
        }

    }); 
    });
