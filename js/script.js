//
// Menu mobile toggle active
//

const header = document.querySelector('header');
const hamburger = document.querySelector('.menu-bars');
const icon = document.querySelector('.menu-bars i');

// Classes for close menu
const classNames = ['fa-x', 'nav-link'];

hamburger.addEventListener('click', () => {
  header.classList.add('active');
  icon.classList.add('fa-x');
  icon.classList.remove('fa-bars');
});

header.addEventListener('click', (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle && header.classList.contains('active')) {
    header.classList.remove('active');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-x');
  }
});

window.addEventListener('resize', () => {
  if (header.classList.contains('active')) {
    header.classList.remove('active');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-x');
  }
});