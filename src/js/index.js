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

// Обработчик состояния входа в систему
const handleLoginState = () => {
  if (auth.getLoginState()) {
    mainApi.getUserData()
      .then((res) => {
        header.render(true, res.name);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    header.render(false);
  }
};

// Обработчик submit для формы регистрации
const singupHandlerCallback = () => {
  const { email, password, name } = validation._getInfo();

  event.preventDefault();
  mainApi.signup(email, password, name)
    .then(() => {
      popup.close();
      popup.setContent(SUCCESS_TEMPLATE_ID);
    })
    .catch((err) => {
      validation.handleServerError(err);
    });
};

// Обработчик submit для формы входа
const singinHandlerCallback = () => {
  const { email, password } = validation._getInfo();

  event.preventDefault();
  mainApi.signin(email, password)
    .then(() => {
      localStorage.setItem('loginState', 'true');

      mainApi.getUserData()
        .then((res) => {
          popup.close();
          header.render(true, res.name);
          // ////////////
          newsCard.renderIconLogout(auth.getLoginState());
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
const searchHandlerCallback = () => {
  event.preventDefault();

  const keyWord = searchForm.getValue();

  if (searchForm.validateElement()) {
    ERROR_ELEMENT.classList.remove('error_enabled');
    NO_RESULTS_ELEMENT.classList.remove('no-results_enabled');
    RESULTS_ELEMENT.classList.remove('results_enabled');

    newsCardList.clearContent();
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

// Инициализация классов
const mainApi = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const auth = new Auth();
const newsApi = new NewsApi(NEWS_API_PARAMS, calculateDate);
const validation = new FormValidator(FORM_ERRORS, singupHandlerCallback, singinHandlerCallback);
const searchForm = new SearchForm(SEARCH_FORM, searchHandlerCallback);
const popup = new Popup(POPUP_ELEMENT, SIGNIN_TEMPLATE_ID, SIGNUP_TEMPLATE_ID, validation);
const newsCard = new NewsCard(CARD_TEMPLATE_ID, auth, calculateCardDate);
const newsCardList = new NewsCardList(CARDS_ELEMENT, newsCard, SHOW_MORE_BUTTON);
const header = new Header({
  MENU_AUTH_TEMPLATE_ID,
  MENU_UNAUTH_TEMPLATE_ID,
  MENU_CONTAINER,
  LOGO_ELEMENT,
  theme: 'white',
  openHandlerCallback: () => {
    popup.setContent(SIGNIN_TEMPLATE_ID);
  },
  logoutHandlerCallback: () => {
    mainApi.logout()
      .then(() => {
        localStorage.removeItem('loginState');
        header.render(false);
        newsCard.renderIconLogout(auth.getLoginState());
      })
      .catch((err) => {
        console.log(err);
      });
  },
});

// Вызов функций
handleLoginState();
