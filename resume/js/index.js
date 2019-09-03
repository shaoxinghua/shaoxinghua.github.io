$(function () {
    // 导航高亮
    $('.outContainer').scrollspy({ target: 'nav'});
    $('.outContainer').each(function () {
        var $spy = $(this).scrollspy('refresh')
    })


    // 滚动到技能时加载动画

    $('.outContainer').scroll(function(){

        if($('.outContainer').scrollTop() > 800){
            $('#skills').addClass('move')
        }else{
            $('#skills').removeClass('move')
        }
    });



    // 项目轮播图
     var mySwiper=new Swiper ('#swiper1', {
           direction: 'horizontal',
           autoplay: {
           delay: 1000,
           stopOnLastSlide: false,
           disableOnInteraction: true,
           },
           loop: true, // 循环模式选项
           slidesPerView : 2,
           centeredSlides : true,

        // 如果需要前进后退按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    })

    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();

    }
    mySwiper.el.onmouseout = function(){
        mySwiper.autoplay.start();
    }




    // 经验tab
    new Swiper ('#swiper2', {
        direction: 'horizontal',
        loop: true,
        speed:300,

        // 如果需要分页器
        pagination: {
            el:'.swiper-pagination',
            clickable: true,

        },
    });


})

window.onload=function () {


}
