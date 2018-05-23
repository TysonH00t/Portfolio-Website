$(document).ready(function() {
    $("#portrait-photo img").addClass("load-top");
    $("#banner-text *").addClass("load-left");
});


$("#menu").hover(function () {
    $("#menu-list").css({display: "block"});
    setTimeout(function(){
        $("#menu-list").css({opacity: "1"});
    }, 500);
}, 
function () {
    $("#menu-list").css({display: "none"});
    $("#menu-list").css({opacity: "0"});
});

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 600) {
        $('#hard-skills').fadeIn();
        $(".skills").css({"background-position": "left bottom"});
    } 

});
