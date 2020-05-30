import BaseComponent from './BaseComponent';

export default class NewsCard extends BaseComponent {
  constructor({ ...props }) {
    super();
    this._props = props;
    this._selector = this._props.CARD_TEMPLATE_ID;
    this._auth = this._props.auth;
    this._calculateCardDate = this._props.calculateCardDate;

    this._saveButtonHandler = this._props.saveButtonHandler || (() => {});
    this._removeButtonHandler = this._props.removeButtonHandler || (() => {});

    this.saveButton = null;
    this.removeButton = null;
  }

  // Создаёт карточку
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

  // Создаёт карточку на странице с сохранёнными статьями
  createSavedCard(cardData) {
    this._template = document.querySelector(this._selector).content.querySelector('.card');
    this.element = this._template.cloneNode(true);

    this.element.querySelector('.card__link').setAttribute('href', cardData.link);
    this.element.querySelector('.card__image').setAttribute('src', cardData.image);
    this.element.querySelector('.card__tag').textContent = cardData.keyword;
    this.element.querySelector('.card__date').textContent = cardData.date;
    this.element.querySelector('.card__title').textContent = cardData.title;
    this.element.querySelector('.card__text').textContent = cardData.text;
    this.element.querySelector('.card__source').textContent = cardData.source;

    this.renderIcon(cardData);

    return this.element;
  }

  // Отрисовывает иконку карточки
  renderIcon(cardData) {
    const cardIcon = this.element.querySelector('.card__icon');
    const cardNotification = this.element.querySelector('.card__notification');

    if (window.location.pathname === '/articles/articles.html') {
      cardIcon.classList.add('card__icon_del');
      cardIcon.classList.add('card__icon_no-signup');
      cardNotification.textContent = 'Убрать из сохранённых';

      this.removeButton = this._removeButtonHandler(cardData._id);
      this._addHandler(cardIcon, 'click', this.removeButton);
    } else if (this._auth.getLoginState()) {
      cardIcon.classList.add('card__icon_save');
      cardNotification.textContent = '';

      this.saveButton = this._saveButtonHandler(cardData);
      this._addHandler(cardIcon, 'click', this.saveButton);
    } else {
      cardIcon.classList.add('card__icon_save');
      cardIcon.classList.add('card__icon_no-signup');
      cardNotification.textContent = 'Войдите, чтобы сохранять статьи';
    }
  }

  // Проверяет заполнен ли url картинки
  _checkUrlToImage(cardData) {
    this.elementImage = this.element.querySelector('.card__image');

    if (cardData.urlToImage === null) {
      this.elementImage.setAttribute('src', 'https://clck.ru/Ndxys');
    } else {
      this.elementImage.setAttribute('src', cardData.urlToImage);
    }
  }

  // Добавляет иконку, когда пользователь сохранил статью
  addMarkedIcon(iconElement, cardData, articleId, flag) {
    iconElement.classList.toggle('card__icon_marked');

    if (flag) {
      this.removeButton = this._removeButtonHandler(articleId, cardData);
      this._addHandler(iconElement, 'click', this.removeButton);
    } else {
      this.saveButton = this._saveButtonHandler(cardData);
      this._addHandler(iconElement, 'click', this.saveButton);
    }
  }
}
