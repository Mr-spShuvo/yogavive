import Plyr from "plyr";
import "../styles/app.scss";
import "plyr/src/sass/plyr.scss";

import Glide from "@glidejs/glide";

new Glide(".glide", {
  autoplay: 5000,
  gap: 40,
}).mount();

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
//scrollOnNav.scrollOn();

// Hide Broadcast on Scroll
const BroadcastToggler = new ClassToggler(
  ".broadcast",
  "broadcast__slide-down"
);
BroadcastToggler.toggleOnScroll();

// Video Player
new Plyr("#player");

// Gallery
import SimpleLightbox from "simplelightbox/dist/simple-lightbox.modules";
import "simplelightbox/dist/simple-lightbox.css";
new SimpleLightbox(".gallery-box__img");

/**
 *
 *
 *
 *
 *
 */
// Webpack Config
if (module.hot) {
  module.hot.accept();
}
