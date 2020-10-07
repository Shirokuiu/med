'use strict';
import PageHeader from '../../components/page-header/page-header';
import Form from '../../components/form/form';
import Helpers from '../../components/helpers/helpers';

const MAX_WIDTH = 1160;
const $pageHeaderInfo = document.querySelector('.page-header__info');
const $formTitle = document.querySelector('.form__title-wrap');
const pageHeader = new PageHeader();
const form = new Form();

pageHeader.init();
form.init();

Helpers.isMobileWidth(MAX_WIDTH, () => {
  $pageHeaderInfo.append($formTitle);
});
