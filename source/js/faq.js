document.addEventListener('DOMContentLoaded', () => {
  const lists = document.querySelectorAll('.faq__sublist');
  const links = document.querySelectorAll('.faq__link');

  function toggleFaqList(el) {
    links.forEach((item, index) => {
      if (item.classList.contains('faq__link--current')) {
        item.classList.remove('faq__link--current');
      }
      if (lists[index].classList.contains('faq__sublist--current')) {
        lists[index].classList.remove('faq__sublist--current');
      }
    });

    el.classList.toggle('faq__link--current');
  }

  links.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFaqList(item);

      lists[index].classList.toggle('faq__sublist--current');
    });
  });

});
