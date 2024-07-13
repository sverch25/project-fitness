// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
const btnElement = document.querySelector('.hero__btn');
const offersElement = document.querySelector('.offers');

btnElement.addEventListener('click', () => {
  offersElement.scrollIntoView({
    block: 'nearest',
    behavior: 'smooth',
  });
});
