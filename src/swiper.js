const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 18,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2.5,
    },
    // when window width is >= 1200px
    1200: {
      slidesPerView: 4,
    },
  },
});
