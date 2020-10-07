import Helpers from '../helpers/helpers';
import iMask from 'imask';

export default class Form {
  constructor() {
    this._MAX_WIDTH = 1700;
    this._MASK = '+{7}(000)000-00-00';
    this._$form = document.querySelector('.form');
    this._$formLeft = this._$form.querySelector('.form__left');
    this._$formRight = this._$form.querySelector('.form__right');
    this._$telInput = this._$form.querySelector('#formTel');
  }

  init() {
    Helpers.isMobileWidth(this._MAX_WIDTH, () => {
      this._$formLeft.append(this._$formRight);
    });

    this._setMask(this._$telInput, this._MASK);
  }

  _setMask(elem, mask) {
    const maskOptions = {
      mask
    };

    iMask(elem, maskOptions);
  }
}
