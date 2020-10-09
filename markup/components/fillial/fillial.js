import owlCarousel from 'owl.carousel/dist/owl.carousel.min';
import fotorama from 'static/js/plugins/fotorama.js';
import Helpers from '../helpers/helpers';

export default class Fillial {
  constructor() {
    this._MAX_WIDTH = 850;
    this._$fillial = document.querySelectorAll('.fillial');
  }

  init() {
    Helpers.isMobileWidth(this._MAX_WIDTH, () => {
      [...this._$fillial].forEach((fillial) => {
        const $tel = fillial.querySelector('.fillial__tel');

        fillial.append($tel);
      });
    });

    $(document).ready(function () {
      $('.fillial__slider').owlCarousel({
        slideTransition: 'ease',
        smartSpeed: 200,
        autoplay: false,
        nav: true,
        responsive: {
          1840: {
            items: 4,
            margin: 40,
            stagePadding: 50,
            dots: true
          },
          1740: {
            items: 4,
            margin: 20,
            stagePadding: 30,
            dots: true
          },
          1280: {
            items: 3,
            margin: 10,
            stagePadding: 20,
            nav: false,
            dots: true
          },
          1000: {
            items: 3,
            margin: 10,
            stagePadding: 16,
            nav: false,
            dots: true
          },
          700: {
            items: 2,
            margin: 10,
            stagePadding: 16,
            nav: false,
            dots: true
          },
          320: {
            items: 1,
            margin: 16,
            stagePadding: 38,
            nav: false,
            dots: false
          }
        }
      });
    });

    $('.fillial__slide-img').fotorama();
  }
}
