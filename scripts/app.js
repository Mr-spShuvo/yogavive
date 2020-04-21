import "../styles/app.scss";
//import "../images/sprite/icons.svg";


let menuIcon = document.querySelector('#media-menu__nav-icon');
let menuContent = document.querySelector('.media-nav__container');
menuIcon.addEventListener('click', function(){
    menuContent.classList.toggle('media-nav__container--isVisible');
});