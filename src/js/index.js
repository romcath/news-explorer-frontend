/* eslint-disable no-use-before-define */
import '../styles/index.css';

import {
  FORM_ERRORS,
  SIGNUP_TEMPLATE_ID,
  SIGNIN_TEMPLATE_ID,
  SUCCESS_TEMPLATE_ID,
  MENU_AUTH_TEMPLATE_ID,
  MENU_UNAUTH_TEMPLATE_ID,
  MENU_CONTAINER,
  LOGO_ELEMENT,
  SERVER_URL,
  NEWS_API_PARAMS,
  POPUP_ELEMENT,
  SEARCH_FORM,
  ERROR_ELEMENT,
} from './constants/constants';

import MainApi from './api/MainApi';
import NewsApi from './api/NewsApi';
import Header from './components/Header';
import Popup from './components/Popup';
import FormValidator from './components/FormValidator';
import SearchForm from './components/SearchForm';
import {calculateDate} from './utils/calculateDate';

// Обработчик состояния входа в систему
const handleLoginState = () => {
  if (!!localStorage.getItem('loginState')) {
    mainApi.getUserData()
      .then((res) => {
        header.render(true, res.name);
      })
      .catch((err) => {
        console.log(err);
      })
  } else {
    header.render(false);
  }
}

// Обработчик submit для формы регистрации
const singupHandlerCallback = () => {
  const { email, password, name } = validation._getInfo();

  event.preventDefault();
  mainApi.signup(email, password, name)
  .then((res) => {
    popup.close();
    popup.setContent(SUCCESS_TEMPLATE_ID);
  })
  .catch((err) => {
    validation.handleServerError(err);
  })
}

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
        })
        .catch((err) => {
          validation.handleServerError(err);
        })
      })
    .catch((err) => {
      validation.handleServerError(err);
    })
}

// Обработчик submit для формы поиска
const searchHandlerCallback = () => {
  if (searchForm.validateElement()) {
    const keyWord = searchForm.getValue();

    event.preventDefault();
    searchForm.renderLoading(true);

    newsApi.getNews(keyWord)
      .then(() => {
        console.log("Все ок");
      })
      .catch(() => {
        ERROR_ELEMENT.classList.add('error_enabled');
      })
      .finally(() => {
        searchForm.renderLoading(false);
      });

      SEARCH_FORM.reset();
  }
}

// Инициализация классов
const mainApi = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const newsApi = new NewsApi(NEWS_API_PARAMS, calculateDate);
const validation = new FormValidator(FORM_ERRORS, singupHandlerCallback, singinHandlerCallback);
const searchForm = new SearchForm(SEARCH_FORM, searchHandlerCallback);
const popup = new Popup(POPUP_ELEMENT, SIGNIN_TEMPLATE_ID, SIGNUP_TEMPLATE_ID, validation);
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
      })
      .catch((err) => {
        console.log(err)
      })
  },
});

// Вызов функций
handleLoginState();
