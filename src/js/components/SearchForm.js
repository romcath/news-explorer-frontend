import FormValidator from './FormValidator';

export default class SearchForm extends FormValidator {
  constructor(formElement, searchHandlerCallback) {
    super();
    this._formElement = formElement;

    this._searchHandlerCallback = searchHandlerCallback || (() => {});
    this._searchHandlerCallback = this._searchHandlerCallback.bind(this);

    this._setEventListeners();
  }

  _setEventListeners() {
    this._setHandlers([
      [this._formElement, 'submit', this._searchHandlerCallback],
    ]);
  }

  validateElement() {
    const inputElement = document.querySelector('.search__input');

    if (inputElement.validity.valueMissing) {
      inputElement.placeholder = 'Нужно ввести ключевое слово';
      return false;
    }
    inputElement.placeholder = 'Введите тему новости';
    return true;
  }

  getValue() {
    return this._formElement.search.value;
  }
}