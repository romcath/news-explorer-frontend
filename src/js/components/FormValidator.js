/* eslint-disable no-restricted-globals */

import BaseComponent from './BaseComponent';

export default class FormValidator extends BaseComponent {
  constructor(words, singupHandlerCallback, singinHandlerCallback) {
    super();
    this._words = words;

    this._singupHandlerCallback = singupHandlerCallback || (() => {});
    this._singupHandlerCallback = this._singupHandlerCallback.bind(this);

    this._singinHandlerCallback = singinHandlerCallback || (() => {});
    this._singinHandlerCallback = this._singinHandlerCallback.bind(this);

    this._validateInputElement = this._validateInputElement.bind(this);
    this._toggleButtonState = this._toggleButtonState.bind(this);
  }

  render(formElement) {
    this._setEventListeners(formElement);
  }

  handleServerError(error) {
    if (error.message === 'Failed to fetch') {
      this._setServerError('Запрос не отправлен. Проблемы с Интернетом');
    } else {
      error.json()
        .then((result) => {
          this._setServerError(result.message);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  _setServerError(error) {
    const spanButton = document.querySelector('.popup__span_center');
    spanButton.textContent = error;
  }

  _setEventListeners(formElement) {
    if (document.forms.signin) {
      this._setHandlers([
        [formElement, 'input', this._validateInputElement],
        [formElement, 'input', this._toggleButtonState],
        [formElement, 'submit', this._singinHandlerCallback],
      ]);
    } else {
      this._setHandlers([
        [formElement, 'input', this._validateInputElement],
        [formElement, 'input', this._toggleButtonState],
        [formElement, 'submit', this._singupHandlerCallback],
      ]);
    }
  }

  _validateInputElement() {
    const inputElement = event.target;
    const spanElement = event.currentTarget.querySelector(`#${inputElement.id}_error`);

    switch (true) {
      case inputElement.validity.valueMissing:
        spanElement.textContent = this._words.validationMissing;
        break;
      case inputElement.validity.tooShort && inputElement.id === 'signup-name':
        spanElement.textContent = this._words.validationLengthName;
        break;
      case inputElement.validity.tooShort:
        spanElement.textContent = this._words.validationLength;
        break;
      case inputElement.validity.patternMismatch:
        spanElement.textContent = this._words.validationEmail;
        break;
      default:
        spanElement.textContent = '';
        break;
    }
  }

  _toggleButtonState() {
    const inputList = Array.from(event.currentTarget.querySelectorAll('.popup__input'));
    const buttonElement = event.currentTarget.querySelector('.popup__button');

    buttonElement.previousElementSibling.textContent = '';

    if (this._validateForm(inputList)) {
      buttonElement.classList.add('popup__button_enabled');
      buttonElement.removeAttribute('disabled');
    } else {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.remove('popup__button_enabled');
    }
  }

  _validateForm(inputList) {
    return inputList.every((inputElement) => inputElement.validity.valid);
  }

  _getInfo() {
    if (document.forms.signup) {
      const formValue = {
        email: event.currentTarget.elements.signup_email.value,
        password: event.currentTarget.elements.signup_pass.value,
        name: event.currentTarget.elements.signup_name.value,
      };
      return formValue;
    }
    const formValue = {
      email: event.currentTarget.elements.signin_email.value,
      password: event.currentTarget.elements.signin_pass.value,
    };
    return formValue;
  }
}
