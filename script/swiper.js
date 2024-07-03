const swiper = new Swiper('#visual_slide', {
    //자동재생(기본설정3초(3000))
    autoplay:{delay:9000},
    loop:true, //기본값은 false
    pagination:{
        el: '#visual_slide .swiper-pagination', //부모 필수
        type:'bullets' //필수작성
    },
})