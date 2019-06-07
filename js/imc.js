$(document).ready(function () {


    var ww = $(window).width();
    var wh = $(window).height();

    function title_layout() {
        $('#title_img').css({
            width: ww,
            height: wh,

        });

        $('#title_img>img').css({
            width: ww,
            height: wh
        });
        $('#hidden_menu').css({
            width: ww,
            height: wh
        });
    };
    title_layout();

    $(window).resize(function () {
        ww = $(window).width();
        wh = $(window).height();
        title_layout();
    });

    /*$('html').animate({
        scrollTop: 0
    },0)*/

    $('#title_img>h1').stop().show(2000);

    setTimeout(function () {
        $('#title_img>h3').stop().fadeIn(2000);
    }, 2000)


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


    
    
    
    $(window).scroll(function () {
        var sct = $(window).scrollTop();
        if (sct >= wh*0.5 && sct < wh*1) {
            $('#sec_1>.in_box:last-child>img').stop().animate({
                opacity: 1,
                left: 1100 + 'px'
            }, 700);
        } else if(sct >= wh && sct < wh*2){
            $('.banner_box:nth-child(1)').stop().show(1000);
        }
    });







    $('.banner_box').mouseenter(function () {
        $('.banner_img_shadow', this).stop().animate({
            height: 50 + '%',
            top: 25 + '%'
        }, 200);
        $('h3', this).stop().transition({
            scale: ('1.5', '1.5'),
            y: -30,
            x: -35 + '%'
        }, 400);
        $('p', this).stop().show(500);
    }).mouseleave(function () {
        $('.banner_img_shadow', this).stop().animate({
            height: 100 + '%',
            top: 0
        }, 200);
        $('h3', this).stop().transition({
            scale: (1, 1),
            y: 0,
            x: -50 + '%'
        });
        $('p', this).stop().hide(500);
    });
}); /*end*/
