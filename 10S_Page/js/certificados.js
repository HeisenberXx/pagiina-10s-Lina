if(window.innerWidth < 760){
    let swiperCertificados = new Swiper('.swiper', {

        effect: 'cards',
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        spaceBetween: 10,
  });
}else{
    let swiperCertificados = new Swiper('.swiper', {

        loop: false,
        navigation: {
            nextEl: ".tt",
            prevEl: ".t",
        },
        slidesPerView: 2,
        spaceBetween: 10,

        breakpoints: {
            1200: {
                slidesPerView: 2
            }
        }
  });

  let swiperCertificadosPersonal = new Swiper('.swiper-certificados', {

    loop: true,

    navigation: {
        nextEl: ".ee",
        prevEl: ".e",
    },
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
        1200: {
            slidesPerView: 2
        }
    }
    });

    
}


document.querySelector(".navbar-toggler").addEventListener("click", () => {
    document.querySelector(".offcanvas-collapse").classList.toggle("open");
});



