
//=============== SWIPER JS ===============
let swiperCards = new Swiper(".card__content", {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
      300: {
        slidesPerView: 1.7,
      },
  
      520: {
        slidesPerView: 2.1,
      },
  
      600: {
        slidesPerView: 2.5,
      },
      786: {
        slidesPerView: 2.7,
      },
      900: {
        slidesPerView: 3,
      },
      1110: {
        slidesPerView: 3.2,
      },
    },
  });