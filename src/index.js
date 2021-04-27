import 'normalize.css';
import './style/main.scss';
import 'particles.js';
import { handleNavScroll, throttle } from './js/utils';

const nav = document.querySelector('nav');
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

window.addEventListener('scroll', () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll(nav), 250);
  }
});

window.particlesJS.load('particles', './assets/particles.json');

const loader = document.querySelector('.loader');

window.addEventListener('load', () => {
  loader.style.display = 'none';
});
