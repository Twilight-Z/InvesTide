/* 轮播图简单滑动脚本 */
    // 获取对象
    const oLbt_s = $("figure.lbt-Slide");
    const oLbt_img = oLbt_s.children();/* 图片总数 */
    const oLbt_sum = oLbt_img.length / oLbt_s.length;/* 每个轮播图共多少张 */
    let Lbt_time;/* 定时器名 */
    const Speed = 3000;/* 速度 */
    let x = 0;

    // 初始化
    oLbt_s.height(oLbt_img[0].height);
    oLbt_img.css("display", "none");
    Slide();
    Lbt_time = setInterval(Slide, Speed);

    // 换图函数
    function  Slide() {
        oLbt_img.fadeOut(900).css("z-index", "1");
        for(i=0; i<oLbt_sum-1; i++)
            oLbt_img.eq(oLbt_sum * i + x).fadeIn(0).css("z-index", "0");
        x++;
        x %= oLbt_sum;
    }

    // 停止定时函数
    oLbt_s.hover(function () {
        clearInterval(Lbt_time);
    },function () {
        Lbt_time = setInterval(Slide, Speed);
    })
