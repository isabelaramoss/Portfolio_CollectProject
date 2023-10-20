const nav = document.querySelector('.mobile-nav-list');
const burger = document.querySelector('.nav-burger');

burger.addEventListener('click', () => {
  nav.classList.toggle("show-mobile-nav");
});