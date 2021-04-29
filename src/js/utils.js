let previousScrollPosition = 0;

const isScrollingDown = () => {
  const currentScrolledPosition = window.scrollY || window.pageYOffset;
  let scrollingDown;

  if (currentScrolledPosition > previousScrollPosition) {
    scrollingDown = true;
  } else {
    scrollingDown = false;
  }
  previousScrollPosition = currentScrolledPosition;
  return scrollingDown;
};

const handleNavScroll = (nav) => {
  if (isScrollingDown() && !nav.contains(document.activeElement)) {
    nav.classList.add('scroll-down');
    nav.classList.remove('scroll-up');
  } else {
    nav.classList.add('scroll-up');
    nav.classList.remove('scroll-down');
  }
};

// initialize a throttleWait variable
let throttleWait;

const throttle = (callback, el, time) => {
  // if the variable is true, don't run the function
  if (throttleWait) return;

  // set the wait variable to true to pause the function
  throttleWait = true;

  // use setTimeout to run the function within the specified time
  setTimeout(() => {
    callback(el);

    // set throttleWait to false once the timer is up to restart the throttle function
    throttleWait = false;
  }, time);
};

let currentHeight = 0;

const setHeight = (elem, offset) => {
  const windowHeight = window.innerHeight;
  if (Math.abs(currentHeight - windowHeight) > 40) {
    // eslint-disable-next-line no-param-reassign
    elem.style.height = `${window.innerHeight - offset}px`;
    currentHeight = windowHeight;
  }
};

export { handleNavScroll, throttle, setHeight };
