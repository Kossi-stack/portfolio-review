const navigation = document.querySelector('.menu-bars');
const body = document.querySelector('body');

navigation.addEventListener('click', () => {
  body.classList.toggle('open-menu');
});

const menuLink = document.querySelectorAll('.nav-link');

menuLink.forEach((e) => e.addEventListener('click', () => {
  body.classList.remove('open-menu');
}));
