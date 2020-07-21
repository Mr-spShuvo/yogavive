import '../styles/app.scss';

import MediaNav from './modules/MediaNav';
import ScrollOnNav from './modules/ScrollOnNav';
import ClassToggler from './components/ClassToggler';

const logo = require('../images/logo/logo.png');
const logoWH = require('../images/logo/logo-white.png');

// Mobile Navigation
const mediaNav = new MediaNav();
mediaNav.toggleMenu();

// Navigation on Scroll
const scrollOnNav = new ScrollOnNav(logo, logoWH);
scrollOnNav.scrollOn();

// Hide Broadcast on Scroll
const BroadcastToggler = new ClassToggler('.broadcast', 'broadcast__slide-down');
BroadcastToggler.toggleOnScroll();

// Webpack Config
if (module.hot) {
  module.hot.accept();
}
