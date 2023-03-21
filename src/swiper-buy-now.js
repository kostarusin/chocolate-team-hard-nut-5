const swiper = new Swiper('.swiper-buy-now', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
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
