var swiper = new Swiper(".mySwiper", {
    effect: "fadeIn",
    direction:"horizontal",
    spaceBetween:0,
    slidePerView:1,
    grabCursor:true,
    loop:true,
    autoplay:{ 
      delay:3000, 
      disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    mousewheel:true,
    keyboard :{
      enabled:true,
    },
  });