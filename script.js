AOS.init({
duration:1000,
once:true
});

new Swiper(".toothbrushSwiper",{

slidesPerView:1,

loop:true,

autoplay:{
delay:3000
},

pagination:{
el:".swiper-pagination",
clickable:true
}

});
