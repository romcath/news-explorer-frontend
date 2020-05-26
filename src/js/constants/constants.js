const MONTHS = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

const FORM_ERRORS = {
  validationLength: 'Должно быть не меньше 8 символов',
  validationMissing: 'Это обязательное поле',
  validationEmail: 'Неправильный формат email',
  validationLengthName: 'Должно быть от 2 до 30 символов',
};

const SIGNUP_TEMPLATE_ID = '#signup-popup-template';
const SIGNIN_TEMPLATE_ID = '#signin-popup-template';
const SUCCESS_TEMPLATE_ID = '#success-popup-template';
const MENU_AUTH_TEMPLATE_ID = '#menu-authorized-template';
const MENU_UNAUTH_TEMPLATE_ID = '#menu-unauthorized-template';
const CARD_TEMPLATE_ID = '#card-template';

const MENU_CONTAINER = document.querySelector('.overlay');
const LOGO_ELEMENT = document.querySelector('.logo');
const ROOT_ELEMENT = document.querySelector('.root');
const POPUP_ELEMENT = document.querySelector('.popup');
const ERROR_ELEMENT = document.querySelector('.error');
const CARDS_ELEMENT = document.querySelector('.cards');
const RESULTS_ELEMENT = document.querySelector('.results');
const NO_RESULTS_ELEMENT = document.querySelector('.no-results');
const SHOW_MORE_BUTTON = document.querySelector('.card__show-button');
const SEARCH_FORM = document.forms.explorer;

// const SERVER_URL = 'http://api.news-app.cf';
const SERVER_URL = 'http://localhost:3000';
const NEWS_API_PARAMS = {
  baseUrl: 'https://praktikum.tk/news/v2/everything?',
  sortBy: 'popularity',
  apiKey: 'a1048954ae8c497ba3eb9fb43d74f300',
  pageSize: 100,
};

export {
  MONTHS,
  FORM_ERRORS,
  SIGNUP_TEMPLATE_ID,
  SIGNIN_TEMPLATE_ID,
  SUCCESS_TEMPLATE_ID,
  MENU_AUTH_TEMPLATE_ID,
  MENU_UNAUTH_TEMPLATE_ID,
  CARD_TEMPLATE_ID,
  MENU_CONTAINER,
  LOGO_ELEMENT,
  ROOT_ELEMENT,
  POPUP_ELEMENT,
  SERVER_URL,
  NEWS_API_PARAMS,
  SEARCH_FORM,
  ERROR_ELEMENT,
  CARDS_ELEMENT,
  RESULTS_ELEMENT,
  NO_RESULTS_ELEMENT,
  SHOW_MORE_BUTTON,
};