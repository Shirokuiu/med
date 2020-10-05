const MOBILE_WIDTH = 1160;
const $body = document.body;
const $header = document.querySelector('.page-header');
const $rowTop = $header.querySelector('#rowTop');
const $topList = $header.querySelector('#topList');
const $logo = $header.querySelector('#pageHeaderLogo');
const $tel = $header.querySelector('.page-header__tel-wrap');
const $menuBtn = $header.querySelector('.page-header__top-menu-btn');
const $mobileMenu = $header.querySelector('.page-header__mobile-menu');
const $mainNav = $header.querySelector('.main-nav');

if (window.innerWidth <= MOBILE_WIDTH) {
  $rowTop.appendChild($logo);
  $rowTop.appendChild($tel);
  $mobileMenu.prepend($mainNav);
  $mobileMenu.prepend($topList);
}

$menuBtn.addEventListener('click', () => {
  $body.classList.toggle('page--menu-open');
  $menuBtn.classList.toggle('page-header__top-menu-btn--open');
  $mobileMenu.classList.toggle('page-header__mobile-menu--open');
});
