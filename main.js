$(document).ready(function() {

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){


        if($(window).scrollTop() > 0 && $(window).scrollTop() < 600) {
            $(".photo").css({top: (600 - $(window).scrollTop())/3 + 'px'});
        }

    }); 
    });
