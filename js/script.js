const header = document.querySelector('header');
const hamburger = document.querySelector('.menu-bars');
const icon = document.querySelector('.menu-bars i');

// Classes for close menu
const classNames = ['fa-bars', 'nav-link'];

const removeActive = () => {
  // console.log('removeActive');
  header.classList.remove('active');
  icon.classList.remove('fa-x');
  icon.classList.add('fa-bars');
};

const addActive = () => {
  // console.log('addActive');
  header.classList.add('active');
  icon.classList.add('fa-x');
  icon.classList.remove('fa-bars');
};

hamburger.addEventListener('click', () => {
  if (header.classList.contains('active')) {
    removeActive();
  } else {
    addActive();
  }
});

header.addEventListener('click', (event) => {
  const clickedElementClassName = event.target.classList[0];
  const shouldToggle = classNames.some((className) => className === clickedElementClassName);

  if (shouldToggle && header.classList.contains('active')) {
    removeActive();
  }
});

window.addEventListener('resize', () => {
  if (header.classList.contains('active')) {
    removeActive();
  }
});
