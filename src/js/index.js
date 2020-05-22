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
  ROOT_ELEMENT,
  SERVER_URL,
  POPUP_ELEMENT,
} from './constants/constants';

import MainApi from './api/MainApi';
import Header from './components/Header';
import Popup from './components/Popup';
import FormValidator from './components/FormValidator';

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

// Инициализация классов
const mainApi = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const validation = new FormValidator(FORM_ERRORS, singupHandlerCallback, singinHandlerCallback);
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




