import FormValidator from './FormValidator';

export default class SearchForm extends FormValidator {
  constructor(formElement, searchHandler) {
    super();
    this._formElement = formElement;

    this._searchHandler = searchHandler || (() => {});
    this._searchHandler = this._searchHandler.bind(this);

    this._setEventListeners();
  }

  // Устанавливает слушатели
  _setEventListeners() {
    this._addHandler(this._formElement, 'submit', this._searchHandler);
  }

  // Проверяет введено ли ключевое слово
  validateElement() {
    const inputElement = document.querySelector('.search__input');

    if (inputElement.validity.valueMissing) {
      inputElement.placeholder = 'Нужно ввести ключевое слово';
      return false;
    }
    inputElement.placeholder = 'Введите тему новости';
    return true;
  }

  // Возвращает ключевое слово
  getValue() {
    return this._formElement.search.value;
  }
}
