/* eslint-disable no-restricted-globals */
import BaseComponent from './BaseComponent';

export default class FormValidator extends BaseComponent {
  constructor(words, singupHandler, singinHandler) {
    super();
    this._words = words;

    this._singupHandler = singupHandler || (() => {});
    this._singupHandler = this._singupHandler.bind(this);

    this._singinHandler = singinHandler || (() => {});
    this._singinHandler = this._singinHandler.bind(this);

    this._validateInputElement = this._validateInputElement.bind(this);
    this._toggleButtonState = this._toggleButtonState.bind(this);
  }

  // Устанавливает слушатели на форму
  setEventListeners(formElement) {
    if (document.forms.signin) {
      this._setHandlers([
        [formElement, 'input', this._validateInputElement],
        [formElement, 'input', this._toggleButtonState],
        [formElement, 'submit', this._singinHandler],
      ]);
    } else {
      this._setHandlers([
        [formElement, 'input', this._validateInputElement],
        [formElement, 'input', this._toggleButtonState],
        [formElement, 'submit', this._singupHandler],
      ]);
    }
  }

  // Обрабатывает ошибку от сервера
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

  // Добавлеят форме ошибку, пришедшую с сервера
  _setServerError(error) {
    document.querySelector('.popup__span_center').textContent = error;
  }

  // Возвращает данные из формы регистрации
  getInfoFromSignup() {
    const formValue = {
      email: event.currentTarget.elements.signup_email.value,
      password: event.currentTarget.elements.signup_pass.value,
      name: event.currentTarget.elements.signup_name.value,
    };
    return formValue;
  }

  // Возвращает данные из формы входа
  getInfoFromSignin() {
    const formValue = {
      email: event.currentTarget.elements.signin_email.value,
      password: event.currentTarget.elements.signin_pass.value,
    };
    return formValue;
  }

  // Валидирует инпут
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

  // Активирует кнопку, если форма валидна
  _toggleButtonState() {
    const inputsList = Array.from(event.currentTarget.querySelectorAll('.popup__input'));
    const buttonElement = event.currentTarget.querySelector('.popup__button');

    buttonElement.previousElementSibling.textContent = '';

    if (this._validateForm(inputsList)) {
      buttonElement.classList.add('popup__button_enabled');
      buttonElement.removeAttribute('disabled');
    } else {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.remove('popup__button_enabled');
    }
  }

  // Проверяет валидность всей формы
  _validateForm(inputList) {
    return inputList.every((inputElement) => inputElement.validity.valid);
  }
}