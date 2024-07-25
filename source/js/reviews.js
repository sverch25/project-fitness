import { Swiper } from './vendor/swiper';

const optionsReviews = {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40
    },
    1366: {
      slidesPerView: 1,
      spaceBetween: 40
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {

  const swiperReviews = new Swiper('#swiper-reviews', optionsReviews);

  const buttonSwiperPrevious = document.querySelector('.swiper-buttons-reviews .swiper-button-prev');
  const buttonSwiperNext = document.querySelector('.swiper-buttons-reviews .swiper-button-next');

  buttonSwiperPrevious.addEventListener('click', () => {
    if (swiperReviews.isBeginning) {
      // Если текущий слайд - последний, блокируем кнопку
      document.querySelector('.swiper-buttons-reviews .swiper-button-prev').style.opacity = '0.3';
    } else {
      // Иначе разблокируем кнопку
      swiperReviews.slidePrev(500, false);
      document.querySelector('.swiper-buttons-reviews .swiper-button-prev').style.opacity = '1';
      document.querySelector('.swiper-buttons-reviews .swiper-button-next').style.opacity = '1';
    }
  });

  buttonSwiperNext.addEventListener('click', () => {
    if (swiperReviews.isEnd) {
      // Если текущий слайд - последний, блокируем кнопку
      document.querySelector('.swiper-buttons-reviews .swiper-button-next').style.opacity = '0.3';
    } else {
      // Иначе разблокируем кнопку
      swiperReviews.slideNext(500, false);
      document.querySelector('.swiper-buttons-reviews .swiper-button-next').style.opacity = '1';
      document.querySelector('.swiper-buttons-reviews .swiper-button-prev').style.opacity = '1';
    }
  });
});
