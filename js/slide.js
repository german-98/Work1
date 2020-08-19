const slider = document.querySelector('.swiper-container') ;

var mySwiper = new Swiper(slider, {
slidesPerView: 3,
spaceBetween:10,
pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    clickabale:true,
  },
  slideToClickedSlide:true,
  centeredSlides:true,
  loop:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  })