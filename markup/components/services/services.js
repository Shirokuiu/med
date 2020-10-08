import Helpers from '../helpers/helpers';
import owlCarousel from 'owl.carousel/dist/owl.carousel.min';

export default class Services {
  constructor() {
    this._MAX_WIDTH = 890;
    this._$sliderContainer = document.querySelectorAll('.services__body-wrap');
  }

  init() {
    Helpers.isMobileWidth(this._MAX_WIDTH, () => {
      [...this._$sliderContainer].forEach((sliderContainer) => {
        sliderContainer.classList.add('owl-carousel');
      });

      $(document).ready(function () {
        $('.services__body-wrap').owlCarousel({
          slideTransition: 'ease',
          items: 1,
          margin: 20,
          stagePadding: 30,
          smartSpeed: 200,
          autoplay: false
        });
      });
    });
  }
}
