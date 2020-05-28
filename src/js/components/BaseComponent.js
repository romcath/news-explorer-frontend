export default class BaseComponent {
  constructor() {
    this._handlers = [];
  }

  _setHandlers(handlers) {
    handlers.forEach((handler) => {
      this._addHandler(...handler);
    });
  }

  _addHandler(element, event, handler) {
    element.addEventListener(event, handler);
  }

  _clearHandlers(element, event, handler) {
    element.removeEventListener(event, handler);
  }
}