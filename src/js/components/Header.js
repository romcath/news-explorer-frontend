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
    const iconElement = element.querySelector('.icon');
    const buttonElement = element.querySelector('.button');
    const linkElement = element.querySelector('.menu__link');

    this._logoElement.classList.add(`logo_${this._theme}`);
    iconElement.classList.add(`icon_logout_${this._theme}`);
    buttonElement.classList.add(`button_${this._theme}`);
    linkElement.classList.add(`menu__link_${this._theme}`, `menu__link_active-${this._theme}`);

    this._setEventListeners(element, buttonElement, iconElement);
  }

  _setEventListeners(element, button, icon) {

    if (element === this._unauthorizedElement) {
      this._setHandlers([
        [button, 'click', this._openHandlerCallback]
      ])
    } else {
      this._setHandlers([
        [icon, 'click', this._logoutHandlerCallback]
      ])
    }
  }
}
