class ScrollOnNav {
  constructor(logo, logoWH) {
    this.logo = logo;
    this.logoWH = logoWH;
    this.siteLogo = document.querySelector('.header-nav__logo img');
    this.header = document.querySelector('.header');
    this.desktopNav = document.querySelector('.desktop-nav');
  }

  scrollOn() {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        this.header.classList.add('header--scrolled');
        this.desktopNav.classList.add('desktop-nav--scrolled');
        this.siteLogo.setAttribute('src', this.logoWH);
      } else {
        this.header.classList.remove('header--scrolled');
        this.desktopNav.classList.remove('desktop-nav--scrolled');
        this.siteLogo.setAttribute('src', this.logo);
      }
    });
  }
}

export default ScrollOnNav;
