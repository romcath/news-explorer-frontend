/* eslint-disable no-restricted-globals */
export default class FormValidator {
  constructor(words) {
    this._words = words;
  }

  validateInputElement(formElement) {
    const inputElement = event.target;
    const spanElement = formElement.querySelector(`#${inputElement.id}-error`);

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

  toggleButtonState(inputList, buttonElement) {
    if (this._validateForm(inputList)) {
      buttonElement.classList.add('popup__button_enabled');
    } else {
      buttonElement.classList.remove('popup__button_enabled');
    }
  }

  _validateForm(inputList) {
    return inputList.every((inputElement) => inputElement.validity.valid);
  }
}
