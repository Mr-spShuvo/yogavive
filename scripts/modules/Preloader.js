class Preloader {
  constructor() {
    this.preloader = document.querySelector(".preloader");
  }

  hide() {
    window.addEventListener("load", () =>
      this.preloader.classList.add("preloader--hide")
    );
  }
}

export default Preloader;
