const swiper = new Swiper('.swiper', {
    // Optional parameters
   // direction: 'horizantal',
    loop: true,
    centerSlides: true,
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
    },

    slidesPerView:5,
    spaceBetween: 0,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 5,
        spaceBetween: 40
      },
      1080:{
        slidesPerView: 6,
        spaceBetween: 30
      }

    }

  
  });
  
