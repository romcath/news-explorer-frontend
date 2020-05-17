export default class Popup {
  constructor(selector, container, openPopupCallback) {
    this._selector = selector;
    this._container = container;

    this._openPopupCallback = openPopupCallback || (() => {});
    this._openPopupCallback = this._openPopupCallback.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setContent() {
    this._template = document.querySelector(this._selector).content.querySelector('.popup');
    this._element = this._template.cloneNode(true);
    this._setEventListeners();
    return this._element.querySelector('.popup__form');
  }

  open() {
    this._element.classList.add('popup_is-opened');
    this._container.appendChild(this._element);
    document.addEventListener('keyup', this._handleEscClose);
  }

  close() {
    const form = this._element.querySelector('.popup__form');

    this._element.classList.remove('popup_is-opened');
    this._element.remove();
    document.removeEventListener('keyup', this._handleEscClose);

    form.reset();
    this._clear(form);
  }

  _setEventListeners() {
    this._element.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    });

    this._element.querySelector('.popup__link').addEventListener('click', () => {
      this.close();
      this._openPopupCallback();
    });
  }

  _handleEscClose(event) {
    const ESCAPE_CODE = 27;

    if (event.keyCode === ESCAPE_CODE) {
      this.close();
    }
  }

  _clear(form) {
    const spanList = Array.from(form.querySelectorAll('.popup__span'));

    spanList.forEach((spanElement) => {
      spanElement.textContent = '';
    });
  }
}
