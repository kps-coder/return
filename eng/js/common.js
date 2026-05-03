$(function(){
    $(".skipmenu").focusin(function(){
        $(this).addClass("on");
    });
    $(".skipmenu").focusout(function(){
        $(this).removeClass("on");
    });
    $(".gnb > li").hover(
        function(){
            $(this).children(".gnb_depth").stop().slideDown(200);
        },
        function(){
            $(this).children(".gnb_depth").stop().slideUp(200);
        }
        );
    $(".gnb > li").focusin(function(){
        $(this).children(".gnb_depth").slideDown(200);
        $(this).siblings().children(".gnb_depth").slideUp(200);
    });
    $(".gnb > li:last-child .gnb_depth li:last-child").focusout(function(){
        $(".gnb_depth").slideUp(200);
    });
    $(".gnb_depth li").hover(
        function(){
            $(this).addClass("hover");
        },
        function(){
            $(this).removeClass("hover");
        }
    );
    var click = 0;
    $(".menu").click(function(){
        click++;
        if(click%2==0){
            $(this).children("img").attr("src","/images/eng/menu.png");
        }else{
            $(this).children("img").attr("src","/images/eng/x.png");
        }
        $(".nav").toggleClass("on");
        $(".bg").toggleClass("on");
    });
    $(".bg").click(function(){
        click++;
        if(click%2==0){
            $(".menu").children("img").attr("src","/images/eng/menu.png");
        }
        $(".nav").removeClass("on");
        $(".bg").removeClass("on");
    });

    var bw = $("body").width();
    $(window).resize(function(){
        bw = $("body").width();
    }).resize();

    $(".depth1 > li").click(function(){
        if(bw<1024){
            $(this).children(".depth2").slideToggle(300);
            $(this).toggleClass("on");
        }
    });
    $(".depth1 > li:first-child li:first-child a").focusin(function(){
        $(".nav").addClass("on");
    });
    $(".depth1 > li:last-child li:last-child a").focusout(function(){
        $(".nav").removeClass("on");
    });
    $(".lnb li").hover(
        function(){
            $(this).addClass("on");
        },
        function(){
            $(this).removeClass("on");
        }
    );
    $(".loc_tab > li").click(function(){
        $(this).addClass("select").siblings().removeClass("select");
        var tab = $(this).index();
        $(".list > li").eq(tab).addClass("select").siblings().removeClass("select");
    });
    //게시판 등록기간 달력
    $("#startDate1").datepicker();
    $("#endDate1").datepicker();
});
