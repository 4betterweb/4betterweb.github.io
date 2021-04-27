import 'normalize.css';
import './style/main.scss';
import { handleNavScroll, throttle } from './js/utils';

const nav = document.querySelector('nav');
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

window.addEventListener('scroll', () => {
  if (mediaQuery && !mediaQuery.matches) {
    throttle(handleNavScroll(nav), 250);
  }
});
