import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor({ ...props }) {
    super();
    this._props = props;
    this._container = this._props.MENU_CONTAINER;
    this._theme = this._props.theme;
    this._logoElement = this._props.LOGO_ELEMENT;

    this._authorizedTemplate = document.querySelector(this._props.MENU_AUTH_TEMPLATE_ID).content.querySelector('.menu');
    this._authorizedElement = this._authorizedTemplate.cloneNode(true);

    this._unauthorizedTemplate = document.querySelector(this._props.MENU_UNAUTH_TEMPLATE_ID).content.querySelector('.menu');
    this._unauthorizedElement = this._unauthorizedTemplate.cloneNode(true);

    this._openHandlerCallback = this._props.openHandlerCallback.bind(this);
    this._logoutHandlerCallback = this._props.logoutHandlerCallback.bind(this);
  }

  render(isLoggedIn, userName) {
    if (isLoggedIn) {
      this._clearElement(this._unauthorizedElement);
      this._addClassElement(this._authorizedElement);
      this._authorizedElement.querySelector('.button__name').textContent = userName;
      this._container.appendChild(this._authorizedElement);
    } else {
      this._clearElement(this._authorizedElement);
      this._addClassElement(this._unauthorizedElement);
      this._container.appendChild(this._unauthorizedElement);
    }
  }

  _clearElement(element) {
    element.remove();
  }

  _addClassElement(element) {
    this._iconElement = element.querySelector('.icon');
    this._buttonElement = element.querySelector('.button');
    this._linkElement = element.querySelector('.menu__link');

    this._logoElement.classList.add(`logo_${this._theme}`);
    this._iconElement.classList.add(`icon_logout_${this._theme}`);
    this._buttonElement.classList.add(`button_${this._theme}`);
    this._linkElement.classList.add(`menu__link_${this._theme}`, `menu__link_active-${this._theme}`);

    this._setEventListeners(element);
  }

  _setEventListeners(element) {
    if (element === this._unauthorizedElement) {
      this._setHandlers([
        [this._buttonElement, 'click', this._openHandlerCallback]
      ])
    } else {
      this._setHandlers([
        [this._iconElement, 'click', this._logoutHandlerCallback]
      ])
    }
  }
}
