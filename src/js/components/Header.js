export default class Header {
  constructor({ ...props }) {
    this._props = props;
    this._container = this._props.container;
    this._theme = this._props.theme;
    this._logoElement = this._props.logo;

    this._authorizedTemplate = document.querySelector(this._props.authorizedTemplate).content.querySelector('.menu');
    this._authorizedElement = this._authorizedTemplate.cloneNode(true);

    this._unauthorizedTemplate = document.querySelector(this._props.unauthorizedTemplate).content.querySelector('.menu');
    this._unauthorizedElement = this._unauthorizedTemplate.cloneNode(true);

    this._openHandlerCallback = this._props.openHandlerCallback || (() => {});
    this._logoutHandlerCallback = this._props.logoutHandlerCallback || (() => {});

    this._openHandlerCallback = this._openHandlerCallback.bind(this);
    // this._logoutHandlerCallback = this.logoutHandlerCallback.bind(this);
  }

  render(isLoggedIn, userName) {
    if (isLoggedIn) {
      this._addClassElement(this._authorizedElement);
      this._authorizedElement.querySelector('.button__name').textContent = userName;
      this._container.appendChild(this._authorizedElement);
    } else {
      this._addClassElement(this._unauthorizedElement);
      this._container.appendChild(this._unauthorizedElement);
    }
  }

  _addClassElement(element) {
    const icon = element.querySelector('.icon');
    const button = element.querySelector('.button');
    const link = element.querySelector('.menu__link');

    this._logoElement.classList.add(`logo_${this._theme}`);
    icon.classList.add(`icon_logout_${this._theme}`);
    button.classList.add(`button_${this._theme}`);
    link.classList.add(`menu__link_${this._theme}`, `menu__link_active-${this._theme}`);

    this._setEventListeners(element, button, icon);
  }

  _setEventListeners(element, button, icon) {
    if (element === this._unauthorizedElement) {
      button.addEventListener('click', () => {
        this._openHandlerCallback();
      });
    } else {
      icon.addEventListener('click', () => {
        this._logoutHandlerCallback();
      });
    }
  }
}
