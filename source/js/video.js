document.addEventListener('DOMContentLoaded', () => {

  const videoContainer = document.querySelector('.about__video');
  const videoPlaceholder = document.querySelector('.about__video-background');
  const playButton = document.querySelector('.about__button');

  playButton.addEventListener('click', () => {
    videoPlaceholder.style.display = 'none';
    playButton.style.display = 'none';

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=TZ0KEWYYlFsPh4yK');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '');

    videoContainer.appendChild(iframe);
  });
});
