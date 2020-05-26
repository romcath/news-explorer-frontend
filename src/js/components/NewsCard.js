import BaseComponent from './BaseComponent';

export default class NewsCard extends BaseComponent {
  constructor(selector, auth, calculateCardDate) {
    super();
    this._selector = selector;
    this._auth = auth;
    this._calculateCardDate = calculateCardDate;
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
    this.renderIcon();

    return this.element;
  }

  _checkUrlToImage(cardData) {
    this.elementImage = this.element.querySelector('.card__image');

    if (cardData.urlToImage === null) {
      this.elementImage.setAttribute('src', 'https://clck.ru/Ndxys');
    } else {
      this.elementImage.setAttribute('src', cardData.urlToImage);
    }
  }

  renderIcon() {
    this._cardIcon = this.element.querySelector('.card__icon');
    this._cardNotification = this.element.querySelector('.card__notification');

    if (this._auth.getLoginState()) {
      this._cardIcon.classList.add('card__icon_save');
    } else {
      this._cardIcon.classList.add('card__icon_save');
      this._cardIcon.classList.add('card__icon_no-signup');
      this._cardNotification.textContent = 'Войдите, чтобы сохранять статьи';
    }
  }

  renderIconLogout(loginState) {
    const cardSaveContainer = Array.from(document.querySelectorAll('.card__save-container'));

    if (cardSaveContainer.length !== 0) {
      if (loginState) {
        cardSaveContainer.forEach((item) => {
          item.querySelector('.card__icon').classList.add('card__icon_save');
          item.querySelector('.card__icon').classList.remove('card__icon_no-signup');
          item.querySelector('.card__notification').textContent = '';
        });
      } else {
        cardSaveContainer.forEach((item) => {
          item.querySelector('.card__icon').classList.add('card__icon_save');
          item.querySelector('.card__icon').classList.add('card__icon_no-signup');
          item.querySelector('.card__notification').textContent = 'Войдите, чтобы сохранять статьи';
        });
      }
    }
  }
}