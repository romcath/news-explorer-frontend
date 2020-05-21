/* eslint-disable no-restricted-globals */

import BaseComponent from './BaseComponent';

export default class FormValidator extends BaseComponent {
  constructor({ ...props }) {
    super();
    this._props = props;
    this._words = this._props.FORM_ERRORS;

    this._singupHandlerCallback = this._props.singupHandlerCallback.bind(this);
    this._singinHandlerCallback = this._props.singinHandlerCallback.bind(this);
    this._validateInputElement = this._validateInputElement.bind(this);
    this._toggleButtonState = this._toggleButtonState.bind(this);
  }

  render(formElement) {
    this._setEventListeners(formElement);
  }

  setServerError(error) {
    const spanButton = document.querySelector('.popup__span_center');
    spanButton.textContent = error;
  }

  _setEventListeners(formElement) {
    if (document.forms.signin) {
      this._setHandlers([
        [formElement, 'input', this._validateInputElement],
        [formElement, 'input', this._toggleButtonState],
        [formElement, 'submit', this._singinHandlerCallback],
      ])
    } else {
      this._setHandlers([
        [formElement, 'input', this._validateInputElement],
        [formElement, 'input', this._toggleButtonState],
        [formElement, 'submit', this._singupHandlerCallback],
      ])
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
      }
      return formValue;
    } else {
      const formValue = {
        email: event.currentTarget.elements.signin_email.value,
        password: event.currentTarget.elements.signin_pass.value,
      }
      return formValue;
    }
  }

}
