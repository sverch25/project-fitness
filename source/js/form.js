const nameInput = document.querySelector('.form__text--name');
const phoneInput = document.querySelector('.form__text--phone');

nameInput.addEventListener('input', function () {
  this.value = this.value.replace(/^[a-zA-Z/D0-9]+$/, '');
});

phoneInput.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9\-()]/g, '');
});
