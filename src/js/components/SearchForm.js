import FormValidator from './FormValidator';

export default class SearchForm extends FormValidator {
  constructor(formElement, searchHandler) {
    super();
    this._formElement = formElement;

    this._searchHandler = searchHandler || (() => {});
    this._searchHandler = this._searchHandler.bind(this);

    this._setEventListeners();
  }

  _setEventListeners() {
    this._setHandlers([
      [this._formElement, 'submit', this._searchHandler],
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
