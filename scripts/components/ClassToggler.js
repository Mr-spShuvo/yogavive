class ClassToggler {
  constructor(domElem, className) {
    this.isToggle = false;
    this.className = className;
    this.domElem = document.querySelector(domElem);
  }

  toggle(type = 'click') {
    this.domElem.addEventListener(type, e => {
      if (this.isToggle) {
        this.isToggle = false;
        this.domElem.classList.add(this.className);
      } else {
        this.isToggle = true;
        this.domElem.classList.remove(this.className);
      }
    });
  }

  toggleOnScroll() {
    window.addEventListener('scroll', e => {
      if (window.scrollY > 500) {
        this.isToggle = false;
        this.domElem.classList.add(this.className);
      } else {
        this.isToggle = true;
        this.domElem.classList.remove(this.className);
      }
    });
  }
}

export default ClassToggler;
