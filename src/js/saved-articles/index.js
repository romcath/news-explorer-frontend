/* eslint-disable no-use-before-define */
import '../../styles/articles.css';

import Header from '../components/Header';
import MainApi from '../api/MainApi';
import NewsCard from '../components/NewsCard';
import NewsCardList from '../components/NewsCardList';
import Auth from '../components/Auth';
import { calculateCardDate } from '../utils/calculateCardDate';
import { savedArticlesTitle } from '../utils/savedArticlesTitle';
import { sortKeyWords } from '../utils/sortKeyWords';

import {
  MENU_AUTH_TEMPLATE_ID,
  MENU_CONTAINER,
  MENU_MOBILE_BUTTON,
  LOGO_ELEMENT,
  CARD_TEMPLATE_ID,
  CARDS_ELEMENT,
  SERVER_URL,
} from '../constants/constants';

// Обработчик удаления статьи
const removeButtonHandler = (articleId) => function removeButton() {
  mainApi.removeArticle(articleId)
    .then(() => {
      newsCardList.removeCard(this.parentNode);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Инициализация классов
const mainApi = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const auth = new Auth();
const newsCard = new NewsCard({ CARD_TEMPLATE_ID, auth, calculateCardDate, removeButtonHandler });
const newsCardList = new NewsCardList(CARDS_ELEMENT, newsCard);
const header = new Header({
  MENU_CONTAINER,
  MENU_MOBILE_BUTTON,
  LOGO_ELEMENT,
  theme: 'dark',
  logoutHandler: () => {
    mainApi.logout()
      .then(() => {
        localStorage.removeItem('loginState');
        window.location.href = '../index.html';
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

// Вызов методов для начальной отрисовки страницы
const handleLoginState = () => {
  if (auth.getLoginState()) {
    mainApi.getUserData()
      .then((res) => {
        header.render(MENU_AUTH_TEMPLATE_ID, true, res.name);
      })
      .catch((err) => {
        console.log(err);
      });

    mainApi.getArticles()
      .then((res) => {
        newsCardList.renderSavedCards(res);
        const name = document.querySelector('.button__name').textContent;
        newsCardList.renderSavedArticlesTitle(savedArticlesTitle(name, res.length));
        newsCardList.setKeywords(sortKeyWords(res));
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    document.querySelector('body').setAttribute('style', 'display: none');
    window.location.href = '../index.html';
  }
};

// Вызов функций
handleLoginState();