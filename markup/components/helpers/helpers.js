export default class Helpers {
  static isMobileWidth(maxWidth = 1160, cb = () => {}) {
    if (window.innerWidth <= maxWidth) {
      cb();
    }
  }

  static isOutOnViewPort($elem) {
    const bounding = $elem.getBoundingClientRect();
    const out = {};

    out.top = bounding.top < 0;
    out.left = bounding.left < 0;
    out.bottom = bounding.bottom > (window.innerHeight || document.documentElement.clientHeight);
    out.right = bounding.right > (window.innerWidth || document.documentElement.clientWidth);

    return out;
  }
}
