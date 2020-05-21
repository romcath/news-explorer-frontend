export default class BaseComponent {
  constructor(handlers = []) {
    this._handlers = handlers;
  }

  _setHandlers(handlers) {
    handlers.forEach((handler) => {
      this._addHandler(...handler)
    })
  }

  _addHandler(element, event, handler) {
    element.addEventListener(event, handler);
  }

  _clearHandlers(element, event, handler) {
    element.removeEventListener(event, handler);
  }

  // _clearHandlers() {
  //   this._handlers.forEach(({ element, event, handler }) => {
  //     element.removeEventListener(event, handler)
  //   })
  // }
}