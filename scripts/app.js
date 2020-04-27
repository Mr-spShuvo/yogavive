import "../styles/app.scss";
const logo = require('../images/logo/logo.png');
const logoWH = require('../images/logo/logo-white.png');


// Media Navigation 

const mediaNavIcon = document.querySelector('#media-menu__nav-icon');
const mediaNavIconSvg = document.querySelector('.media-menu__icon use');
const mediaNavContent = document.querySelector('.media-nav__container');
let iconChanged;
mediaNavIcon.addEventListener('click', (e) => {
    if (iconChanged) {
        mediaNavIconSvg.setAttribute('xlink:href', "images/icons/sprite.svg#menu");
        iconChanged = false;
    } else {
        mediaNavIconSvg.setAttribute('xlink:href', "images/icons/sprite.svg#cross");
        iconChanged = true;
    }
    mediaNavContent.classList.toggle('media-nav__container--isVisible');
});


// Scroll Behaviour

const isHome = document.querySelector('.homepage');
const siteLogo = document.querySelector('.header-nav__logo img');
const header = document.querySelector('.header');

if (isHome) {
    siteLogo.setAttribute('src', logoWH);
    header.classList.add('header--home');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            header.classList.add('header--scrolled');
            header.classList.remove('header--home');
            siteLogo.setAttribute('src', logo);

        } else {
            header.classList.add('header--home');
            header.classList.remove('header--scrolled');
            siteLogo.setAttribute('src', logoWH);
        }
    });
} else {
    header.classList.add('header--scrolled');
}