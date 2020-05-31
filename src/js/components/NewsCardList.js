import BaseComponent from './BaseComponent';

export default class NewsCardList extends BaseComponent {
  constructor(container, card, buttonElement) {
    super();
    this._container = container;
    this._card = card;
    this._buttonElement = buttonElement;
    this._foundedCards = [];
    this._item = [];
    this.renderedCards = [];

    this._showMore = this._showMore.bind(this);
  }

  // Сохраняет ключевое слово в массиве полученных карточек
  renderResults(cards, request) {
    const keyWord = { keyword: request };

    this._foundedCards = cards.map((item) => ({ ...item, ...keyWord }));
    return this.foundedCards;
  }

  // Добавляет в разметку по 3 карточки
  appendCards() {
    this._item = this._foundedCards.splice(0, 3);
    this._item.forEach((item) => {
      this._card.create(item);
      this._container.appendChild(this._card.element);
    });
    this.renderedCards = this.renderedCards.concat(this._item);
  }

  // Добавляет найденные карточки в разметку после того, как пользователь пройдёт аутентификацию
  appendCardsLogin(cards) {
    cards.forEach((item) => {
      this._card.create(item);
      this._container.appendChild(this._card.element);
    });
  }

  // Возвращает массив с отрисованными карточками
  getRenderedCards() {
    return this.renderedCards;
  }

  // Очищает массив с отрисованными карточками
  clearRenderedCardsArray() {
    this.renderedCards = [];
  }

  // Добавляет карточки на страницу с сохранёнными статьями
  renderSavedCards(articles) {
    articles.forEach((item) => {
      this._card.createSavedCard(item);
      this._container.appendChild(this._card.element);
    });
  }

  // Удаляет карточку из разметки
  removeCard(cardElement) {
    cardElement.parentNode.remove();
  }

  // Устанавливает слушатели
  setEventListener() {
    this._buttonElement.classList.remove('button_disabled');
    this._addHandler(this._buttonElement, 'click', this._showMore);
  }

  // Отрисовывает лоудер
  renderLoader(isLoading) {
    const spinner = document.querySelector('.preloader');

    if (isLoading) {
      spinner.classList.add('preloader_enabled');
    } else {
      spinner.classList.remove('preloader_enabled');
    }
  }

  // Очищает контейнер со всеми карточками
  clearContent() {
    const res = Array.from(this._container.querySelectorAll('.card'));
    if (res.length !== 0) {
      res.forEach((item) => {
        item.remove();
      });
    }
  }

  // Отвечает за кнопку «Показать ещё»
  _showMore() {
    this.appendCards();

    if (this._foundedCards.length === 0) {
      this._buttonElement.classList.add('button_disabled');
    }
  }

  // Отрисовывает приветствие на странице с сохранёнными статьями
  renderSavedArticlesTitle(title) {
    document.querySelector('.title').textContent = title;
  }

  // Добавляет в разметку ключевые слова, по которым были найдены статьи
  setKeywords(array) {
    const keywordsContainer = document.querySelector('.articles__span');
    if (array.length > 3) {
      keywordsContainer.textContent = `${array.splice(0, 2).join(', ')} и ${array.length} ${array.length % 10 === 1 ? 'другое' : 'другим'}`;
    } else if (array.length <= 3 && array.length > 0) {
      keywordsContainer.textContent = `${array.join(', ')}`;
    } else if (array.length === 0) {
      keywordsParagraph.textContent = 'У вас нет сохраненных статей';
    }
  }
}