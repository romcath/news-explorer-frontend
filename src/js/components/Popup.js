import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(popupElement, signinTemplate, signupTemplate, validation) {
    super();
    this._popupElement = popupElement;
    this._signinTemplate = signinTemplate;
    this._signupTemplate = signupTemplate;
    this._validation = validation;

    this._handleEscClose = this._handleEscClose.bind(this);
    this._openPopupCallback = this._openPopupCallback.bind(this);
    this.close = this.close.bind(this);
  }

  setContent(selector) {
    this._template = document.querySelector(selector).content.querySelector('.popup__template-container');
    this._element = this._template.cloneNode(true);
    this._popupElement.querySelector('.popup__content').appendChild(this._element);
    this._setEventListeners();
    this.open();
    
    if (selector !== '#success-popup-template') {
      this._validation.render(this._element.querySelector('.popup__form'));
    }
  }

  clearContent() {
    this._popupElement.querySelector('.popup__template-container').remove();
  }

  open() {
    this._popupElement.classList.add('popup_is-opened');
  }

  close() {
    this._popupElement.classList.remove('popup_is-opened');
    this._element.remove();
    this._clearHandlers(document, 'keyup', this._handleEscClose);
  }

  _handleEscClose(event) {
    const ESCAPE_CODE = 27;

    if (event.keyCode === ESCAPE_CODE) {
      this.close();
    }
  }

  _openPopupCallback() {
    this.clearContent();

    if (event.target.classList.contains('popup__link_signin')) {
      this.setContent(this._signinTemplate);
    } else {
      this.setContent(this._signupTemplate);
    }
  }

  _setEventListeners() {
    this._setHandlers([
      [document, 'keyup', this._handleEscClose],
      [this._popupElement.querySelector('.popup__close'), 'click', this.close],
      [this._element.querySelector('.popup__link'), 'click', this._openPopupCallback],
    ])
  }
}
