const mobMenuBtn = document.querySelector('.header__hamburger');
const mobileMenu = document.querySelector('.menu');
const galleryItems = document.querySelectorAll('.gallery__wrapper');
const galleryFullScreen = document.querySelector('.gallery__fullscreen');
const galleryFullScreenImg = document.querySelector('.gallery__fullscreen_img');

mobMenuBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('menu_active');
});

galleryItems.forEach(item => {
    item.addEventListener('click', ()=> {
        galleryFullScreen.classList.toggle('gallery__fullscreen_hide');
    })
});

galleryFullScreen.addEventListener('click', () => {
    galleryFullScreen.classList.add('gallery__fullscreen_hide');
});