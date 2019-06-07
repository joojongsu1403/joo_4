$(document).ready(function () {
    var ww = $(window).width();
    var wh = $(window).height();
    $('#main_title').css({
        width: ww,
        height: 100 + 'px',
        backgroundColor: '#aace36'
    })
    $('#hidden_menu').css({
        width: ww,
        height: wh
    });


    var one = false;
    $('#main_icon>img').click(function () {
        if (!one) {
            $(this).stop().attr({
                src: 'img/main_img/icon_color_1.png'
            }).transition({
                rotate: '360deg'
            });
            one = true;
            $('#hidden_menu').stop().fadeIn(200);
            $('#hidden_menu>ul').stop().show(500);
            $('#hidden_menu>p').stop().fadeIn(1000);

        } else {
            $(this).stop().attr({
                src: 'img/main_img/icon.png'
            }).transition({
                rotate: 0
            });
            one = false;
            $('#hidden_menu').stop().fadeOut(200);
            $('#hidden_menu>ul').stop().hide(500);
            $('#hidden_menu>p').stop().fadeOut(500);
        }
    });

    $('#hidden_menu>ul>li').mouseenter(function () {
        $('a', this).stop().animate({
            fontWeight: 600,
            fontSize: 40 + 'px',
            color: '#3c3c3c',
            left: 10 + 'px'
        }, 100);
        $('.hidden_line', this).stop().show(200);
    }).mouseleave(function () {
        $('a', this).stop().animate({
            fontWeight: 0,
            fontSize: 36 + 'px',
            color: '#787878',
            left: 0
        }, 100);
        $('.hidden_line', this).stop().hide(200);
    });






}); //end
