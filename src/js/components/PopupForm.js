import Popup from './Popup';

export default class PopupForm extends Popup {
  constructor(validation, selector, container, openPopupCallback) {
    super(selector, container, openPopupCallback);
    this._setListeners(validation);
  }

  _setListeners(validation) {
    const formElement = this.setContent();
    const getInputList = Array.from(formElement.querySelectorAll('.popup__input'));

    formElement.addEventListener('input', () => {
      validation.validateInputElement(formElement);
    });

    formElement.addEventListener('input', () => {
      validation.toggleButtonState(getInputList, formElement.querySelector('.popup__button'));
    });
  }
}
