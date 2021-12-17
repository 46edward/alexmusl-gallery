const mobMenuBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

mobMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('mobile-menu_hide');
});