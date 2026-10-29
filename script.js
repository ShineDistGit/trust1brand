AOS.init({
    duration: 1000,
    once: true
});

new Swiper(".toothbrushSwiper", {
    loop: true,

    autoplay: {
        delay: 3500
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});
