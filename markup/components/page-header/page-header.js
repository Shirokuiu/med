import Helpers from '../helpers/helpers';

export default class PageHeader {
  constructor() {
    this._MOBILE_WIDTH = 1160;
    this._$body = document.body;
    this._$header = document.querySelector('.page-header');
    this._$rowTop = this._$header.querySelector('#rowTop');
    this._$topList = this._$header.querySelector('#topList');
    this._$logo = this._$header.querySelector('#pageHeaderLogo');
    this._$tel = this._$header.querySelector('.page-header__tel-wrap');
    this._$menuBtn = this._$header.querySelector('.page-header__top-menu-btn');
    this._$mobileMenu = this._$header.querySelector('.page-header__mobile-menu');
    this._$mainNav = this._$header.querySelector('.main-nav');
  }

  init() {
    Helpers.isMobileWidth(this._MOBILE_WIDTH, () => {
      this._$rowTop.appendChild(this._$logo);
      this._$rowTop.appendChild(this._$tel);
      this._$mobileMenu.prepend(this._$mainNav);
      this._$mobileMenu.prepend(this._$topList);
    });

    this._$menuBtn.addEventListener('click', () => {
      this._$body.classList.toggle('page--menu-open');
      this._$menuBtn.classList.toggle('page-header__top-menu-btn--open');
      this._$mobileMenu.classList.toggle('page-header__mobile-menu--open');
    });
  }
}
