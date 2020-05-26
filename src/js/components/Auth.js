/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
export default class Auth {
  constructor() {
  }

  getLoginState() {
    return !!localStorage.getItem('loginState');
  }

  checkAuthorization() {
    // eslint-disable-next-line no-unused-expressions
    !this.getLoginState() ? window.location.href = '../' : false;
  }
}