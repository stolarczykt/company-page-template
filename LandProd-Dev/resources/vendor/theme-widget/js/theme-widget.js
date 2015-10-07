function openThemesWidget() {
    if(parseInt($(".themes-content").css("right").replace(/[^-\d\.]/g, '')) === -140) {
        $(".themes-content").animate({
            right: "-50px"
        }, 500 );
    } else {
        $(".themes-content").animate({
            right: "-140px"
        }, 500 );
    }
}

$(function(){
    var offset = 150;
    $("#themes-menu").css("top", $(".header").offset().top + offset);
    $(window).scroll(function() {
        $("#themes-menu").css("top", $(".header").offset().top + offset);
    });

    if($.cookie('theme')) {
        var themeName = $.cookie('theme');
        var stylesheet = themeName+'.css';
        var color = $('#themes').find("[data-name='" + themeName + "']").find('.fa-stack-2x').css("color");

        $('#theme').attr('href', 'resources/css/' + stylesheet);
    }

    $('#themes').find('.theme-item').click(function(e){

        var themeName = $(this).data("name");
        console.log(themeName);
        var stylesheet = themeName+'.css';
        console.log(stylesheet);

        $('#theme').attr('href', 'resources/css/' + stylesheet);

        $.cookie('theme', themeName, {expires: 365, path: '/'});
    });
});
