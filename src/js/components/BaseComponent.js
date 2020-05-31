/* eslint-disable no-useless-constructor */
/* eslint-disable no-empty-function */
export default class BaseComponent {
  constructor() {
  }

  _setHandlers(handlers) {
    handlers.forEach((handler) => {
      this._addHandler(...handler);
    });
  }

  _addHandler(element, event, handler) {
    element.addEventListener(event, handler);
  }

  _clearHandler(element, event, handler) {
    element.removeEventListener(event, handler);
  }
}