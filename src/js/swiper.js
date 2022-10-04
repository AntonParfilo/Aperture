const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    breakpoints: {
      320: {
        slidesPerView:1,
      },
      500: {
          slidesPerView:2,
      },
      767.98: {
          slidesPerView:3,
      },
      1024: {
          slidesPerView:4,
      },
      1440: {
          slidesPerView:5,
      },
    },
    loop: true,
    speed: 400,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: 'true',
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 1000,
      },
  });
  