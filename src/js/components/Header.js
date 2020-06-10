import BaseComponent from './BaseComponent';

export default class Header extends BaseComponent {
  constructor({ ...props }) {
    super();
    this._props = props;
    this._container = this._props.MENU_CONTAINER;
    this._mobileButton = this._props.MENU_MOBILE_BUTTON;
    this._theme = this._props.theme;
    this._logoElement = this._props.LOGO_ELEMENT;

    this._openPopupHandler = this._props.openPopupHandler || (() => {});
    this._logoutHandler = this._props.logoutHandler || (() => {});
  }

  // Отрисовывает шапку в зависимости от того зарегистрирован пользователь или нет
  render(selector, isLoggedIn, userName) {
    this._template = document.querySelector(selector).content.querySelector('.menu');
    this._element = this._template.cloneNode(true);
    this._addClassElement(this._element, selector);

    if (isLoggedIn) {
      this._element.querySelector('.button__name').textContent = userName;
    }
    this._container.appendChild(this._element);
  }

  // Добавляет классы элементам меню
  _addClassElement(element, selector) {
    this._iconElement = element.querySelector('.icon');
    this._buttonElement = element.querySelector('.button');
    this._linkElement = element.querySelector('.menu__link');

    this._logoElement.classList.add(`logo_${this._theme}`);
    this._iconElement.classList.add(`icon_logout_${this._theme}`);
    this._buttonElement.classList.add(`button_${this._theme}`);

    if (window.location.pathname === '/articles/articles.html') {
      const menuLinkList = Array.from(element.querySelectorAll('.menu__link'));
      menuLinkList[1].classList.add(`menu__link_active-${this._theme}`);

      menuLinkList.forEach((item) => {
        item.classList.add(`menu__link_${this._theme}`);
      });
    } else {
      this._linkElement.classList.add(`menu__link_${this._theme}`, `menu__link_active-${this._theme}`);
    }
    this._setEventListeners(selector);
  }

  // Удаляет меню из разметки
  clearElement() {
    this._container.querySelector('.menu').remove();
    this._clearHandler(this._buttonElement, 'click', this._openPopupHandler);
    this._clearHandler(this._iconElement, 'click', this._logoutHandler);
  }

  // Открывает мобильное меню
  _openMobileMenu() {
    this._container.classList.add('overlay_enabled');
    this._element.classList.add('menu_mobile');
    if (window.location.pathname === '/articles/articles.html') {
      this._element.classList.add('menu_mobile_white');
    }
    this._clearHandler(this._mobileButton, 'click', this._openMobileMenu.bind(this));
    this._addHandler(this._mobileButton, 'click', this.closeMobileMenu.bind(this));
    this._addHandler(this._container, 'mousedown', this._handleCloseMenu.bind(this));
  }

  // Закрывает мобильное меню при клике по оверлею
  _handleCloseMenu(event) {
    if (event.target === this._container && event.target !== this._container.querySelector('.menu_mobile')) {
      this.closeMobileMenu();
    }
  }

  // Закрывает мобильное меню
  closeMobileMenu() {
    this._container.classList.remove('overlay_enabled');
    this._element.classList.remove('menu_mobile');
    this._element.classList.remove('menu_mobile');
    this._clearHandler(this._mobileButton, 'click', this.closeMobileMenu.bind(this));
    this._addHandler(this._mobileButton, 'click', this._openMobileMenu.bind(this));
  }

  // Устанавливает слушатели
  _setEventListeners(selector) {
    this._addHandler(this._mobileButton, 'click', this._openMobileMenu.bind(this));
    if (selector === '#menu-unauthorized-template') {
      this._addHandler(this._buttonElement, 'click', this._openPopupHandler.bind(this));
    } else {
      this._addHandler(this._iconElement, 'click', this._logoutHandler.bind(this));
    }
  }
}
