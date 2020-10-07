export default class Helpers {
  static isMobileWidth(maxWidth = 1160, cb = () => {}) {
    if (window.innerWidth <= maxWidth) {
      cb();
    }
  }
}
