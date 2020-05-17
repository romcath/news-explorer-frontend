/* eslint-disable no-use-before-define */
import '../styles/index.css';

import {
  FORM_ERRORS,
  SIGNUP_TEMPLATE_ID,
  SIGNIN_TEMPLATE_ID,
  MENU_AUTH_TEMPLATE_ID,
  MENU_UNAUTH_TEMPLATE_ID,
  MENU_CONTAINER,
  LOGO_ELEMENT,
  ROOT_ELEMENT,
} from './constants/constants';

import Header from './components/Header';
import PopupForm from './components/PopupForm';
import FormValidator from './components/FormValidator';

const openPopupSignupCallback = () => {
  popupSignup.open();
};

const openPopupSigninCallback = () => {
  popupSignin.open();
};

const validation = new FormValidator(FORM_ERRORS);
const popupSignup = new PopupForm(validation, SIGNUP_TEMPLATE_ID, ROOT_ELEMENT, openPopupSigninCallback);
const popupSignin = new PopupForm(validation, SIGNIN_TEMPLATE_ID, ROOT_ELEMENT, openPopupSignupCallback);
const header = new Header({
  authorizedTemplate: MENU_AUTH_TEMPLATE_ID,
  unauthorizedTemplate: MENU_UNAUTH_TEMPLATE_ID,
  container: MENU_CONTAINER,
  logo: LOGO_ELEMENT,
  theme: 'white',
  openHandlerCallback: () => {
    popupSignin.open();
  },
  logoutHandlerCallback: () => {
    // выход
  },
});

header.render(false);