'use strict';
import PageHeader from '../../components/page-header/page-header';
import Form from '../../components/form/form';
import Helpers from '../../components/helpers/helpers';
import Fillial from '../../components/fillial/fillial';
import Services from '../../components/services/services';
import References from '../../components/references/references';
import MainNav from '../../components/js/main-nav';

const MAX_WIDTH = 1160;
const $pageHeaderInfo = document.querySelector('.page-header__info');
const $formTitle = document.querySelector('.form__title-wrap');
const pageHeader = new PageHeader();
const form = new Form();
const fillial = new Fillial();
const services = new Services();
const references = new References();
const mainNav = new MainNav();

pageHeader.init();
form.init();
fillial.init();
services.init();
references.init();
mainNav.init();

Helpers.isMobileWidth(MAX_WIDTH, () => {
  $pageHeaderInfo.append($formTitle);
});
