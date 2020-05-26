import BaseComponent from './BaseComponent';

export default class NewsCardList extends BaseComponent {
  constructor(container, card, buttonElement) {
    super();
    this._container = container;
    this._card = card;
    this._buttonElement = buttonElement;
    this._foundedCards = [];
    this._item = [];

    this._showMore = this._showMore.bind(this);
  }

  renderResults(cards, request) {
    const keyWord = { keyWord: request };

    this._foundedCards = cards.map((item) => ({ ...item, ...keyWord }));
    return this.foundedCards;
  }

  appendCards() {
    this._item = this._foundedCards.splice(0, 3);
    this._item.forEach((item) => {
      this._card.create(item);
      this._container.appendChild(this._card.element);
    });
  }

  setEventListener() {
    this._setHandlers([
      [this._buttonElement, 'click', this._showMore],
    ]);
  }

  renderLoader(isLoading) {
    const spinner = document.querySelector('.preloader');

    if (isLoading) {
      spinner.classList.add('preloader_enabled');
    } else {
      spinner.classList.remove('preloader_enabled');
    }
  }

  clearContent() {
    const res = Array.from(this._container.querySelectorAll('.card'));

    if (res.length !== 0) {
      res.forEach((item) => {
        item.remove();
      });
    }
  }

  _showMore() {
    this.appendCards();

    if (this._foundedCards.length === 0) {
      this._buttonElement.classList.add('button_disabled');
    }
  }
}