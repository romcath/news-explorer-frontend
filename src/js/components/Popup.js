/* eslint-disable no-restricted-globals */
import BaseComponent from './BaseComponent';

export default class Popup extends BaseComponent {
  constructor(popupElement, signinTemplate, signupTemplate, validation) {
    super();
    this._popupElement = popupElement;
    this._signinTemplate = signinTemplate;
    this._signupTemplate = signupTemplate;
    this._validation = validation;

    this._closeButton = this._popupElement.querySelector('.popup__close');

    this._handleEscClose = this._handleEscClose.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleOpenPopup = this._handleOpenPopup.bind(this);
    this._close = this.close.bind(this);
  }

  // Вставляет в попап содержимое
  setContent(selector) {
    this._template = document.querySelector(selector).content.querySelector('.popup__template-container');
    this._element = this._template.cloneNode(true);
    this._link = this._element.querySelector('.popup__link');
    this._popupElement.querySelector('.popup__content').appendChild(this._element);
    this._setEventListeners();
    this.open();

    if (selector !== '#success-popup-template') {
      this._validation.setEventListeners(this._element.querySelector('.popup__form'));
    }
  }

  // Очищает содержимое попапа
  clearContent() {
    this._popupElement.querySelector('.popup__template-container').remove();
    this._clearHandler(this._link, 'click', this._handleOpenPopup);
  }

  // Открывает попап
  open() {
    this._popupElement.classList.add('popup_is-opened');
  }

  // Закрывает попап
  close() {
    this._popupElement.classList.remove('popup_is-opened');
    this._element.remove();
    this._clearHandler(document, 'keyup', this._handleEscClose);
    this._clearHandler(this._closeButton, 'click', this._close);
  }

  // Закрывает попап при клике в любое место вне попапа
  _handleClose(event) {
    if (event.target === this._popupElement && event.target !== this._popupElement.querySelector('.popup__content')) {
      this.close();
    }
  }

  // Закрывает попап при нажатии клавиши Esc
  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  // Открывает попап по клику на ссылку
  _handleOpenPopup() {
    this.clearContent();

    if (event.target.classList.contains('popup__link_signin')) {
      this.setContent(this._signinTemplate);
    } else {
      this.setContent(this._signupTemplate);
    }
  }

  // Устанавливает слушатели
  _setEventListeners() {
    this._setHandlers([
      [this._closeButton, 'click', this._close],
      [this._link, 'click', this._handleOpenPopup],
      [this._popupElement, 'mousedown', this._handleClose],
      [document, 'keyup', this._handleEscClose],
    ]);
  }
}
