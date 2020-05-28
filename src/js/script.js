/* eslint-disable no-console */
const menu = document.querySelector('.menu__container');
const menuButton = document.querySelector('.menu__button');
const overlay = document.querySelector('.overlay');

menuButton.onclick = () => {
  menu.classList.toggle('menu__container_open');
  menuButton.classList.toggle('menu__button_open');
  overlay.classList.toggle('overlay_open');
};

function closeMenu() {
  menu.classList.remove('menu__container_open');
  menuButton.classList.remove('menu__button_open');
  overlay.classList.remove('overlay_open');
}

overlay.onclick = () => {
  closeMenu();
};

const mediaQueryList = window.matchMedia('(min-width: 1190px)');

function handleOrientationChange(evt) {
  if (evt.matches) {
    if (menu.classList.contains('menu__container_open')) {
      closeMenu();
    }
  }
}

handleOrientationChange(mediaQueryList);

mediaQueryList.addListener(handleOrientationChange);
