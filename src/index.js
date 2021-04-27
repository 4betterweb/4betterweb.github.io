import 'normalize.css';
import './style/main.scss';
import 'particles.js';
import { handleNavScroll, throttle, setHeight } from './js/utils';

const nav = document.querySelector('nav');
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const loader = document.querySelector('.loader');
const topView = document.querySelector('#particles');

window.addEventListener('scroll', () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll(nav), 250);
  }
});

window.particlesJS.load('particles', './assets/particles.json');

window.addEventListener('load', () => {
  loader.style.display = 'none';
});

setHeight(topView, 48);
window.addEventListener('resize', throttle(setHeight(topView, 48), 250));

console.log(topView.style.height);
