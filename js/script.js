//
// Menu mobile toggle active
//

const h = document.querySelector('header');
const m = document.querySelector('.menu-bars');
const i = document.querySelector('.menu-bars i');

// Classes for close menu
const x = ['fa-bars', 'nav-link'];

m.addEventListener('click', () => {
  // console.log('hamburger');
  if (h.classList.contains('active')) {
    h.classList.remove('active');
    i.classList.remove('fa-x');
    i.classList.add('fa-bars');
  } else {
    h.classList.add('active');
    i.classList.add('fa-x');
    i.classList.remove('fa-bars');
  }
});

h.addEventListener('click', (event) => {
  // console.log('header');
  const z = event.target.classList[0];
  const t = x.some((y) => y === z);

  if (t && h.classList.contains('active')) {
    h.classList.remove('active');
    i.classList.add('fa-bars');
    i.classList.remove('fa-x');
  }
});

window.addEventListener('resize', () => {
  // console.log('window');
  if (h.classList.contains('active')) {
    h.classList.remove('active');
    i.classList.add('fa-bars');
    i.classList.remove('fa-x');
  }
});
