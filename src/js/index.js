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

const mainApi = new MainApi({
  baseUrl: SERVER_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
const validation = new FormValidator({
  FORM_ERRORS,
  singupHandlerCallback: () => {
    const { email, password, name } = validation._getInfo();

    event.preventDefault();
    mainApi.signup(email, password, name).then((res) => {
      if (res.message) {
        validation.setServerError(res.message);
      } else {
        popup.close();
        popup.setContent(SUCCESS_TEMPLATE_ID);
      }
    })
    .catch((err) => {
      console.log(err);
    })
  },
  singinHandlerCallback: () => {
    const { email, password } = validation._getInfo();

    event.preventDefault();
    mainApi.signin(email, password).then((res) => {
      if (res.message) {
        validation.setServerError(res.message);
      } else {
        localStorage.setItem('loginState', 'true')

        mainApi.getUserData().then((res) => {
          header.render(true, res.name);
        })
        .catch((err) => {
          console.log(err)
        })
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
});
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
});

// localStorage.removeItem('loginState');
//  Для теста
if (!!localStorage.getItem('loginState')) {
  mainApi.getUserData().then((res) => {
    header.render(true, res.name);
  })
  .catch((err) => {
    console.log(err);
  })
} else {
  header.render(false);
}



