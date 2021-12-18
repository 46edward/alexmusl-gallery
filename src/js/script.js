const mobMenuBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.menu');

mobMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('menu_active');
});