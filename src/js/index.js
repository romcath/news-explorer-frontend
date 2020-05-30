/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
import '../styles/index.css';

import {
  FORM_ERRORS,
  SIGNUP_TEMPLATE_ID,
  SIGNIN_TEMPLATE_ID,
  SUCCESS_TEMPLATE_ID,
  MENU_AUTH_TEMPLATE_ID,
  MENU_UNAUTH_TEMPLATE_ID,
  CARD_TEMPLATE_ID,
  MENU_CONTAINER,
  LOGO_ELEMENT,
  SERVER_URL,
  NEWS_API_PARAMS,
  POPUP_ELEMENT,
  SEARCH_FORM,
  ERROR_ELEMENT,
  CARDS_ELEMENT,
  RESULTS_ELEMENT,
  NO_RESULTS_ELEMENT,
  SHOW_MORE_BUTTON,
  MENU_MOBILE_BUTTON,
} from './constants/constants';

import MainApi from './api/MainApi';
import NewsApi from './api/NewsApi';
import Header from './components/Header';
import Popup from './components/Popup';
import FormValidator from './components/FormValidator';
import SearchForm from './components/SearchForm';
import NewsCard from './components/NewsCard';
import NewsCardList from './components/NewsCardList';
import Auth from './components/Auth';
import { calculateDate } from './utils/calculateDate';
import { calculateCardDate } from './utils/calculateCardDate';
import { capitalizeFirstLetter } from './utils/capitalizeFirstLetter';

// Обработчик состояния входа в систему
const handleLoginState = () => {
  if (auth.getLoginState()) {
    mainApi.getUserData()
      .then((res) => {
        header.render(MENU_AUTH_TEMPLATE_ID, true, res.name);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    header.render(MENU_UNAUTH_TEMPLATE_ID, false);
  }
};

// Обработчик submit для формы регистрации
const singupHandler = () => {
  const { email, password, name } = validation.getInfoFromSignup();

  event.preventDefault();
  mainApi.signup(email, password, name)
    .then(() => {
      header.closeMobileMenu();
      popup.close();
      popup.setContent(SUCCESS_TEMPLATE_ID);
    })
    .catch((err) => {
      validation.handleServerError(err);
    });
};

// Обработчик submit для формы входа
const singinHandler = () => {
  const { email, password } = validation.getInfoFromSignin();

  event.preventDefault();
  mainApi.signin(email, password)
    .then(() => {
      localStorage.setItem('loginState', 'true');

      mainApi.getUserData()
        .then((res) => {
          const array = newsCardList.getRenderedCards();

          popup.close();
          header.clearElement();
          header.render(MENU_AUTH_TEMPLATE_ID, true, res.name);
          newsCardList.clearContent();
          newsCardList.appendCardsLogin(array);
        })
        .catch((err) => {
          validation.handleServerError(err);
        });
    })
    .catch((err) => {
      validation.handleServerError(err);
    });
};

// Обработчик submit для формы поиска
const searchHandler = () => {
  event.preventDefault();

  const keyWord = searchForm.getValue();

  if (searchForm.validateElement()) {
    ERROR_ELEMENT.classList.remove('error_enabled');
    NO_RESULTS_ELEMENT.classList.remove('no-results_enabled');
    RESULTS_ELEMENT.classList.remove('results_enabled');

    newsCardList.clearContent();
    newsCardList.clearRenderedCardsArray();
    newsCardList.renderLoader(true);

    newsApi.getNews(keyWord)
      .then((result) => {
        if (result.articles.length !== 0) {
          RESULTS_ELEMENT.classList.add('results_enabled');

          newsCardList.setEventListener();
          newsCardList.renderResults(result.articles, keyWord);
          newsCardList.appendCards();
        } else {
          NO_RESULTS_ELEMENT.classList.add('no-results_enabled');
        }
      })
      .catch(() => {
        ERROR_ELEMENT.classList.add('error_enabled');
      })
      .finally(() => {
        newsCardList.renderLoader(false);
      });
    SEARCH_FORM.reset();
  }
};

// Обработчик сохранения статей
const saveButtonHandler = (cardData) => function saveButton() {
  const { title, description, urlToImage, publishedAt, source, url, keyword } = cardData;
  const cardFields = {
    keyword: capitalizeFirstLetter(keyword),
    title,
    text: description,
    date: calculateCardDate(publishedAt),
    source: source.name,
    link: url,
    image: urlToImage,
  };
  const iconElement = event.target;

  mainApi.createArticle(cardFields)
    .then((res) => {
      const articleId = res._id;

      iconElement.removeEventListener('click', saveButton);
      newsCard.addMarkedIcon(iconElement, cardData, articleId, true);
    })
    .catch((err) => {
      console.log(err);
    });
};

// Обработчик удаления статьи
const removeButtonHandler = (articleId, cardData) => function removeButton() {
  const iconElement = event.target;

  mainApi.removeArticle(articleId)
    .then(() => {
      iconElement.removeEventListener('click', removeButton);
      newsCard.addMarkedIcon(iconElement, cardData, articleId, false);
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
const newsApi = new NewsApi(NEWS_API_PARAMS, calculateDate);
const validation = new FormValidator(FORM_ERRORS, singupHandler, singinHandler);
const searchForm = new SearchForm(SEARCH_FORM, searchHandler);
const popup = new Popup(POPUP_ELEMENT, SIGNIN_TEMPLATE_ID, SIGNUP_TEMPLATE_ID, validation);
const newsCard = new NewsCard({ CARD_TEMPLATE_ID, auth, calculateCardDate, saveButtonHandler, removeButtonHandler });
const newsCardList = new NewsCardList(CARDS_ELEMENT, newsCard, SHOW_MORE_BUTTON);
const header = new Header({
  MENU_CONTAINER,
  MENU_MOBILE_BUTTON,
  LOGO_ELEMENT,
  theme: 'white',
  openPopupHandler: () => {
    popup.setContent(SIGNIN_TEMPLATE_ID);
    header.closeMobileMenu();
  },
  logoutHandler: () => {
    mainApi.logout()
      .then(() => {
        localStorage.removeItem('loginState');
        header.closeMobileMenu();
        header.clearElement();
        header.render(MENU_UNAUTH_TEMPLATE_ID, false);
        newsCardList.clearContent();
        const array = newsCardList.getRenderedCards();
        newsCardList.appendCardsLogin(array);
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

// Вызов функций
handleLoginState();