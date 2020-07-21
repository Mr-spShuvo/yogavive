class MediaNav {
  constructor() {
    this.isToggle = false;
    this.mediaNavIcon = document.querySelector('#media-menu__nav-icon');
    this.mediaNavIconSvg = document.querySelector('.media-menu__icon use');
    this.mediaNavContent = document.querySelector('.media-nav__container');
  }

  toggleMenu() {
    this.mediaNavIcon.addEventListener('click', e => {
      if (this.isToggle) {
        this.mediaNavIconSvg.setAttribute('xlink:href', 'images/icons/sprite.svg#menu');
        this.isToggle = false;
      } else {
        this.mediaNavIconSvg.setAttribute('xlink:href', 'images/icons/sprite.svg#close');
        this.isToggle = true;
      }
      this.mediaNavContent.classList.toggle('media-nav__container--isVisible');
    });
  }
}

export default MediaNav;
