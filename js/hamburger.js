const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', (e) => {
  e.preventDefault();
  hamburger.classList.toggle('hamburger--active');
  menu.classList.toggle('menu--active');
});