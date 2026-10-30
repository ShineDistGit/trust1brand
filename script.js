window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        loader.style.transition =
        "opacity 0.8s ease";

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.remove();

        }, 800);

    }, 3000);

});

AOS.init({
    duration:1000,
    once:true
});

new Swiper(".toothbrushSwiper",{

    loop:true,

    autoplay:{
        delay:3500
    },

    pagination:{
        el:".swiper-pagination",
        clickable:true
    }

});
