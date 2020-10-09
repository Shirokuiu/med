import Helpers from '../helpers/helpers';
import owlCarousel from 'owl.carousel/dist/owl.carousel.min';

export default class Services {
  constructor() {
    this._MAX_WIDTH = 890;
    this._$sliderContainer = document.querySelectorAll('.services__body-wrap');
  }

  init() {
    Helpers.isMobileWidth(this._MAX_WIDTH, () => {
      const $tables = document.querySelectorAll('.services__table');

      if ($tables) {
        [...$tables].forEach(($table) => {
          const $tableTrs = $table.querySelectorAll('.services__tr');
          const $thForm = $table.querySelector('.services__head-th--form');
          const $thPrice = $table.querySelector('.services__head-th--price');

          if ($tableTrs) {
            [...$tableTrs].forEach(($tableTr) => {
              const $tdTitle = $tableTr.querySelector('.services__td--title');
              const tdForm = $tableTr.querySelector('.services__td--form');
              const tdPrice = $tableTr.querySelector('.services__td--price');
              const prices = [...tdPrice.querySelectorAll('.services__td-text')].map(
                (priceText) => priceText.textContent
              );

              $tdTitle.insertAdjacentHTML(
                'beforeend',
                this._getMobileTemplate($thForm.textContent, $thPrice.textContent, tdForm.textContent, prices)
              );
            });
          }
        });
      }

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

  _getMobileTemplate(thForm, thPrice, tdForm, prices) {
    return `
      <ul class="services__td-modile-list">
        <li class="services__td-mobile-items">
          <span class="services__td-mobile-title">${thForm}</span>
          <p class="services__td-mobile-text">${tdForm}</p>
        </li>
         <li class="services__td-mobile-items">
            <span class="services__td-mobile-title">${thPrice}</span>
            ${prices.map((price) => `<p class="services__td-mobile-text">${price}</p>`).join('')}
         </li>
      </ul>
    `.trim();
  }
}
