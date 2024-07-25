const acc = document.getElementsByClassName('faq__subitem');
const accElement = document.querySelector('.faq__subitem');
const panelElement = accElement.querySelector('.faq__panel');
const buttonElement = accElement.querySelector('.faq__button');
let i;

panelElement.style = 'max-height: 140px';
buttonElement.style = 'background-image: url(../../img/sprite/minus.svg)';

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    const panel = this.querySelector('.faq__panel');
    const button = this.querySelector('.faq__button');
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      button.style.backgroundImage = 'url("../../img/sprite/plus.svg")';
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
      button.style.backgroundImage = 'url("../../img/sprite/minus.svg")';
    }
  });
}
