export default class MainApi {
  constructor(options) {
    this._options = options;
  }

  signup(email, password, name) {
    return fetch(`${this._options.baseUrl}/signup`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email, password, name,
      }),
    })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return Promise.reject('Пользователь не зарегистрирован');
    })
  }

  signin(email, password) {
    return fetch(`${this._options.baseUrl}/signin`, {
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email, password,
      }),
    })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return Promise.reject('Сервер не отвечает');
    })
  }

  getUserData() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      method: 'GET',
      credentials: 'include',
      headers: this._options.headers,
    })
     .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(res);
    })
    .catch((err) => {
      return Promise.reject(err.status);
    })
  }

}

