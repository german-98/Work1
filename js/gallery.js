const slider = document.querySelector('.swiper-container') ;

var mySwiper = new Swiper(slider, {
slidesPerView: 1,
pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickabale:true,
  },
  slideToClickedSlide:true,
  centeredSlides:true,
  loop:true,
  lazy:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })