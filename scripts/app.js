import "../styles/app.scss";
//import "../images/sprite/icons.svg";


const mediaNavIcon = document.querySelector('#media-menu__nav-icon');
const mediaNavIconSvg = document.querySelector('.media-menu__icon use');
const mediaNavContent = document.querySelector('.media-nav__container');
let iconChanged;
mediaNavIcon.addEventListener('click', (e)=>{
    if(iconChanged){
        mediaNavIconSvg.setAttribute('xlink:href', "sprite/icons.svg#menu");
        iconChanged = false;
    } else{
        mediaNavIconSvg.setAttribute('xlink:href', "sprite/icons.svg#cross");
        iconChanged = true;
    }
    mediaNavContent.classList.toggle('media-nav__container--isVisible');
});