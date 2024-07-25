document.addEventListener('DOMContentLoaded', () => {
  const lists = document.querySelectorAll('.price__sublist');
  const links = document.querySelectorAll('.price__link');

  function toggleFaqList(el) {
    links.forEach((item, index) => {
      if (item.classList.contains('price__link--current')) {
        item.classList.remove('price__link--current');
      }
      if (lists[index].classList.contains('price__sublist--current')) {
        lists[index].classList.remove('price__sublist--current');
      }
    });

    el.classList.toggle('price__link--current');
  }

  links.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      toggleFaqList(item);

      lists[index].classList.toggle('price__sublist--current');
    });
  });
});
