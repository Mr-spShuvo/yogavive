// Import Packages
import Plyr from "plyr";
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.modules";
import Glide from "@glidejs/glide";

// Import Styles
import "simplelightbox/dist/simple-lightbox.css";
import "plyr/src/sass/plyr.scss";
import "../styles/app.scss";

// Import Modules
import MediaNav from "./modules/MediaNav";
import ScrollOnNav from "./modules/ScrollOnNav";
import ClassToggler from "./components/ClassToggler";

const logo = require("../images/logo/logo.png");
const logoWH = require("../images/logo/logo-white.png");

// Mobile Navigation
const mediaNav = new MediaNav();
mediaNav.toggleMenu();

// Navigation on Scroll
const scrollOnNav = new ScrollOnNav(logo, logoWH);
scrollOnNav.scrollOn();

// Hide Broadcast on Scroll
const BroadcastToggler = new ClassToggler(
  ".broadcast",
  "broadcast__slide-down"
);
BroadcastToggler.toggleOnScroll();

// Video Player
new Plyr("#player");

// Gallery
new SimpleLightbox(".gallery-box__img");

// Slider
new Glide(".glide", {
  autoplay: 5000,
  gap: 40,
}).mount();

// Webpack Config
if (module.hot) {
  module.hot.accept();
}
