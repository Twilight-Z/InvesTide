/* Top导航栏 */
    // 获取对象
    const oHead = $("#header");
    const oNav = oHead.children(".container + .container");

    // 初始化
    $(window).scroll(function () {
        Nav();
    })

    // fixed显示函数
    function Nav() {
        if($(window).scrollTop() > 77)
            oNav.addClass("fixed-top Sd")
                .removeClass("container")
                .css({
                    "width": "100vw",
                    "padding": "0 calc(50% - 520px)", 
                })
                .children()
                .removeClass("border-top");
        else
            oNav.addClass("container")
                .removeClass("fixed-top Sd")
                .css({
                    "padding": "0 15px", 
                    "width": ""
                })
                .children()
                .addClass("border-top");
    }




/* 返回TOP脚本 */
    // 获取对象
    const oTop = $("#s-top");

    // 初始化
    Top();
    $(window).scroll(function () {
        Top();
    })

    // 返回顶部函数
    oTop.click(function () {
        $('body,html').animate({scrollTop:0},300, "swing");
    })

    // 显示Top函数
    function Top(){
        if($(window).scrollTop()>130){
            oTop.slideDown(500);
        }else{
            oTop.slideUp(500);
        };
    }
    



/* 选项卡脚本 */
    // 获取对象
    tabCon(".tab-menus>", ".tab-case", "bg-danger", "bg-secondary", "d-block");
    tabCon(".tab-menus2>", ".tab-case2", "TemuBlue", "TemuSecondary", "d-block");
    tabCon(".tab-menus3>", ".tab-case3", "TemuBlue", "TemuSecondary", "d-block");

    // 函数封装
    function tabCon(tab_menu, tab_case, tm_cur, tm_cur2, tab_content) {
        $(tab_menu).click(function() {
            const oHeight =  $(this).height();
            var thisIndex = $(this).index();
            $(this).addClass(tm_cur)
                .removeClass(tm_cur2)
                .siblings()
                .addClass(tm_cur2)
                .removeClass(tm_cur);
                
            $(tab_case).children()
                .stop()
                .animate({height:"0px"}, 180, "swing")
                .removeClass(tab_content)
                .addClass("d-none")
                .eq(thisIndex)
                .addClass(tab_content)
                // .effect("fade", 500)
                .stop()
                .animate({height: "100%"}, 300, "swing")
                .removeClass("d-none");
        })
    }
