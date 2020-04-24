import "../styles/app.scss";

const mediaNavIcon = document.querySelector('#media-menu__nav-icon');
const mediaNavIconSvg = document.querySelector('.media-menu__icon use');
const mediaNavContent = document.querySelector('.media-nav__container');
let iconChanged;
mediaNavIcon.addEventListener('click', (e)=>{
    if(iconChanged){
        mediaNavIconSvg.setAttribute('xlink:href', "images/icons/sprite.svg#menu");
        iconChanged = false;
    } else{
        mediaNavIconSvg.setAttribute('xlink:href', "images/icons/sprite.svg#cross");
        iconChanged = true;
    }
    mediaNavContent.classList.toggle('media-nav__container--isVisible');
});