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
      document.querySelector('.swiper-buttons-reviews .swiper-button-prev').disabled = true;
    } else {
      swiperReviews.slidePrev(500, false);
      document.querySelector('.swiper-buttons-reviews .swiper-button-prev').disabled = false;
      document.querySelector('.swiper-buttons-reviews .swiper-button-next').disabled = false;
    }
  });

  buttonSwiperNext.addEventListener('click', () => {
    if (swiperReviews.isEnd) {
      document.querySelector('.swiper-buttons-reviews .swiper-button-next').disabled = true;
    } else {
      swiperReviews.slideNext(500, false);
      document.querySelector('.swiper-buttons-reviews .swiper-button-next').disabled = false;
      document.querySelector('.swiper-buttons-reviews .swiper-button-prev').disabled = false;
    }
  });
});
