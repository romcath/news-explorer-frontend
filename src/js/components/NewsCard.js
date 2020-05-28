import BaseComponent from './BaseComponent';

export default class NewsCard extends BaseComponent {
  constructor(selector, auth, calculateCardDate, saveButtonHandler, removeButtonHandler) {
    super();
    this._selector = selector;
    this._auth = auth;
    this._calculateCardDate = calculateCardDate;

    this._saveButtonHandler = saveButtonHandler || (() => {});
    this._saveButtonHandler = this._saveButtonHandler.bind(this);

    this._removeButtonHandler = removeButtonHandler || (() => {});
    this._removeButtonHandler = this._removeButtonHandler.bind(this);

    this.saveButton = null;
    this.removeButton = null;
  }

  create(cardData) {
    this._template = document.querySelector(this._selector).content.querySelector('.card');
    this.element = this._template.cloneNode(true);

    this._checkUrlToImage(cardData);

    this.element.querySelector('.card__link').setAttribute('href', cardData.url);
    this._date = this._calculateCardDate(cardData.publishedAt);
    this.element.querySelector('.card__date').textContent = this._date;
    this.element.querySelector('.card__title').textContent = cardData.title;
    this.element.querySelector('.card__text').textContent = cardData.description;
    this.element.querySelector('.card__source').textContent = cardData.source.name;
    this.renderIcon(cardData);

    return this.element;
  }

  renderIcon(cardData) {
    this._cardIcon = this.element.querySelector('.card__icon');
    this._cardNotification = this.element.querySelector('.card__notification');

    if (this._auth.getLoginState()) {
      this._cardIcon.classList.add('card__icon_save');
      this._cardNotification.textContent = '';

      this.saveButton = this._saveButtonHandler(cardData);

      this._setHandlers([
        [this._cardIcon, 'click', this.saveButton],
      ]);
    } else {
      this._cardIcon.classList.add('card__icon_save');
      this._cardIcon.classList.add('card__icon_no-signup');
      this._cardNotification.textContent = 'Войдите, чтобы сохранять статьи';
    }
  }

  _checkUrlToImage(cardData) {
    this.elementImage = this.element.querySelector('.card__image');

    if (cardData.urlToImage === null) {
      this.elementImage.setAttribute('src', 'https://clck.ru/Ndxys');
    } else {
      this.elementImage.setAttribute('src', cardData.urlToImage);
    }
  }

  addMarkedIcon(iconElement, cardData, articleId, flag) {
    iconElement.classList.toggle('card__icon_marked');

    if (flag) {
      this.removeButton = this._removeButtonHandler(articleId, cardData);
      this._setHandlers([
        [iconElement, 'click', this.removeButton],
      ]);
    } else {
      this.saveButton = this._saveButtonHandler(cardData);
      this._setHandlers([
        [iconElement, 'click', this.saveButton],
      ]);
    }
  }
}
