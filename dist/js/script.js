window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const scrollClass = 'backdrop-blur-md bg-darkmode/60 shadow-md';

  if (window.scrollY > 50) {
    header.classList.add(...scrollClass.split(' '));
  } else {
    header.classList.remove(...scrollClass.split(' '));
  }
});

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
  navMenu.classList.toggle('hidden');

  hamburger.classList.toggle('hamburger-active');
});

window.addEventListener('click', function (e) {
  if (e.target !== hamburger && e.target !== navMenu && !navMenu.contains(e.target)) {
    navMenu.classList.add('hidden');
  }
});
