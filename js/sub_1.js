$(document).ready(function () {
    var ww = $(window).width();
    var wh = $(window).height();
    $('#main_title').css({
        width: ww,
        height: wh,
        backgroundColor: '#ee7f48'
    })
    $('#hidden_menu').css({
        width: ww,
        height: wh
    });
    $('#sec_1').css({
        width: ww,
        height: wh
    });



    $('#main_title>h1').stop().slideDown(1000);

    setTimeout(function () {
        $('#main_title>h1').stop().fadeOut(700);
    }, 1800);

    setTimeout(function () {
        $('#main_title').stop().animate({
            height: 100 + 'px'
        }, 1000)
    }, 2500);


    setTimeout(function () {
        $('#sec_1>img').stop().fadeIn(1000)
    }, 3500);


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
    
    

    $(window).scroll(function(){
        var sct=$(window).scrollTop();
        if(sct >= wh*0.3 && sct < wh*1){
            $('.slogan_box').stop().animate({
               opacity: 1,
                top: 0
            },1000);
        }
        
    });

    
    setTimeout(function(){
       $('#mounth>li:nth-child(1)').click(); 
    });


    $('#in_his_box').each(function (index) {
        $(this).attr('data-index', index);
    });
    $('#mounth>li').each(function (index) {
        $(this).attr('data-index', index);
    }).click(function () {
        var mon_num = $(this).attr('data-index');
        $('#in_his_box').stop().animate({
            left: -800 * mon_num
        });
        $('#mounth').stop().animate({
            left: -120 * mon_num
        });
        
        function white(){
            $('#mounth>li[data-index='+mon_num+']').addClass('on');
            $('#mounth>li[data-index!='+mon_num+']').removeClass('on');
        }
        white();
        
        $('#right').click(function (index) {
            mon_num++;
            if (mon_num > 14) {
                mon_num = 14;
            }
            $('#mounth').stop().animate({
                left: -120 * mon_num
            });

            $('#in_his_box').stop().animate({
                left: -800 * mon_num
            });
            white();
        });
        
        $('#left').click(function (index) {
            mon_num--;
            if (mon_num < 0) {
                mon_num = 0;
            }
            $('#mounth').stop().animate({
                left: -120 * mon_num
            });
            $('#in_his_box').stop().animate({
                left: -800 * mon_num
            });
            white();
        });
    });

    



});
