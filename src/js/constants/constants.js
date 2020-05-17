const FORM_ERRORS = {
  validationLength: 'Должно быть не меньше 8 символов',
  validationMissing: 'Это обязательное поле',
  validationEmail: 'Неправильный формат email',
  validationLengthName: 'Должно быть от 2 до 30 символов',
};

const SIGNUP_TEMPLATE_ID = '#signup-popup-template';
const SIGNIN_TEMPLATE_ID = '#signin-popup-template';
const MENU_AUTH_TEMPLATE_ID = '#menu-authorized-template';
const MENU_UNAUTH_TEMPLATE_ID = '#menu-unauthorized-template';

const MENU_CONTAINER = document.querySelector('.overlay');
const LOGO_ELEMENT = document.querySelector('.logo');
const ROOT_ELEMENT = document.querySelector('.root');

export { FORM_ERRORS,
  SIGNUP_TEMPLATE_ID,
  SIGNIN_TEMPLATE_ID,
  MENU_AUTH_TEMPLATE_ID,
  MENU_UNAUTH_TEMPLATE_ID,
  MENU_CONTAINER,
  LOGO_ELEMENT,
  ROOT_ELEMENT,
};