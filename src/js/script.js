const hamburgerBtn = document.querySelector('.header__hamburger');
const closeBtn = document.querySelector('.menu__mobile_close');
const mobileMenu = document.querySelector('.menu');
const galleryItems = document.querySelectorAll('.gallery__wrapper');
const galleryFullScreen = document.querySelector('.gallery__fullscreen');
const galleryFullScreenImg = document.querySelector('.gallery__fullscreen_img');
const menuLinks = document.querySelectorAll('.menu__item');
const sectionsContent = document.querySelectorAll('section');

menuLinks.forEach((item, key) => {
    item.addEventListener('click', ()=>{
        sectionsContent.forEach((section, id) => { 
            if(section.classList.length > 1){
                let match = section.classList.toString().match(/\w+\_\w+/); // search active class
                match.forEach(i => {
                    section.classList.remove(i);
                }); // deleted all active classes
            };
        });
        sectionsContent[key].classList.add(`${sectionsContent[key].classList.toString()}_active`);
        mobileMenu.classList.toggle('menu_active');
    });
});

hamburgerBtn.addEventListener('click', ()=> {
    mobileMenu.classList.toggle('menu_active');
});

closeBtn.addEventListener('click', ()=> {
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