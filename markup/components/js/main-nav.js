import Helpers from '../helpers/helpers';

export default class MainNav {
  constructor() {
    this._MAX_WIDTH = 1160;
    this._$items = document.querySelectorAll('.main-nav__items');
  }

  init() {
    if (this._$items) {
      [...this._$items].forEach(($item) => {
        const $dropdown = $item.querySelector('.main-nav__dropdown');
        $dropdown.insertAdjacentHTML('afterbegin', this._getDropdownTitleTemplate());
        const $dropdownItems = $item.querySelectorAll('.main-nav__dropdown-item');

        const $titleLink = $dropdownItems[0].querySelector('.main-nav__dropdown-link');
        const $titleLinkText = $titleLink.querySelector('.main-nav__dropdown-link-text--title');

        $titleLink.href = $item.querySelector('.main-nav__link').href;
        $titleLinkText.textContent = $item.querySelector('.main-nav__item-title').textContent;

        $item.addEventListener('mouseenter', this._handleItemMouseenter);

        $dropdown.addEventListener('mouseleave', this._handleDropdownMouseleave);

        Helpers.isMobileWidth(this._MAX_WIDTH, () => {
          $item.removeEventListener('mouseenter', this._handleItemMouseenter);
          $dropdown.removeEventListener('mouseleave', this._handleDropdownMouseleave);

          const $titleArrows = $item.querySelectorAll('.main-nav__link-arrow');
          const $dropdownItems = $dropdown.querySelectorAll('.main-nav__dropdown-item');

          if ($titleArrows) {
            [...$titleArrows].forEach(($titleArrow) => {
              $titleArrow.addEventListener('click', () => {
                $dropdown.classList.toggle('main-nav__dropdown--open');
                $dropdown.classList.toggle('main-nav__dropdown--open-inner');
              });
            });
          }

          if ($dropdownItems) {
            [...$dropdownItems].forEach(($dropdownItem) => {
              const $subItem = $dropdownItem.querySelector('.main-nav__dropdown-inner');
              const $dropdownArrow = $dropdownItem.querySelector('.main-nav__dropdown-link-icon');

              if ($dropdownArrow) {
                $dropdownArrow.addEventListener('click', () => {
                  $subItem.classList.toggle('main-nav__dropdown-inner--open');
                });
              }
            });
          }
        });

        [...$dropdownItems].forEach(($dropdownItem) => {
          $dropdownItem.addEventListener('mouseenter', this._handleDropdownItemMouseenter);
          $dropdownItem.addEventListener('mouseleave', this._handleDropdownItemMouseleave);

          Helpers.isMobileWidth(this._MAX_WIDTH, () => {
            $dropdownItem.removeEventListener('mouseenter', this._handleDropdownItemMouseenter);
            $dropdownItem.removeEventListener('mouseleave', this._handleDropdownItemMouseleave);
          });
        });
      });
    }
  }

  _handleItemMouseenter(evt) {
    const { target } = evt;

    if (target) {
      const $itemDropdown = target.querySelector('.main-nav__dropdown');

      $itemDropdown.classList.add('main-nav__dropdown--open');
    }
  }

  _handleDropdownMouseleave(evt) {
    const { target } = evt;

    if (target) {
      target.classList.remove('main-nav__dropdown--open');
    }
  }

  _handleDropdownItemMouseenter(evt) {
    const { target } = evt;
    const $dropdownInner = target.querySelector('.main-nav__dropdown-inner');

    if ($dropdownInner) {
      $dropdownInner.classList.add('main-nav__dropdown-inner--open');
      const overflowViewPort = Helpers.isOutOnViewPort($dropdownInner);

      if (overflowViewPort.right) {
        $dropdownInner.classList.add('main-nav__dropdown-inner--overflow-right');
      }
    }
  }

  _handleDropdownItemMouseleave(evt) {
    const { target } = evt;
    const $dropdownInner = target.querySelector('.main-nav__dropdown-inner');

    if ($dropdownInner) {
      $dropdownInner.classList.remove('main-nav__dropdown-inner--open');
    }
  }

  _getDropdownTitleTemplate() {
    return `<li class="main-nav__dropdown-items">
        <div class="main-nav__dropdown-item">
            <div class="main-nav__dropdown-link-wrap">
              <a class="main-nav__dropdown-link" href="">
                <span class="main-nav__dropdown-link-text main-nav__dropdown-link-text--title"></span>
              </a>
            </div>
        </div>
      </li>`.trim();
  }
}
