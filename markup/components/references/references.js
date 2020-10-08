import owlCarousel from 'owl.carousel/dist/owl.carousel.min';
import Helpers from '../helpers/helpers';

export default class References {
  constructor() {
    this._MAX_WIDTH = 600;
    this._$sliderContainer = document.querySelectorAll('.references__list');
  }

  init() {
    Helpers.isMobileWidth(this._MAX_WIDTH, () => {
      [...this._$sliderContainer].forEach((sliderContainer) => {
        sliderContainer.classList.add('owl-carousel');
      });

      $(document).ready(function () {
        $('.references__list').owlCarousel({
          slideTransition: 'ease',
          items: 1,
          margin: 20,
          stagePadding: 42,
          smartSpeed: 200,
          autoplay: false
        });
      });
    });
  }
}
