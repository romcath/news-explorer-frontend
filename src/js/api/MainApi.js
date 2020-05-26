export default class MainApi {
  constructor(options) {
    this._options = options;
  }

  signup(email, password, name) {
    return fetch(`${this._options.baseUrl}/signup`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email, password, name,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((err) => Promise.reject(err));
  }

  signin(email, password) {
    return fetch(`${this._options.baseUrl}/signin`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
        email, password,
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((err) => Promise.reject(err));
  }

  logout() {
    return fetch(`${this._options.baseUrl}/logout`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'POST',
      headers: this._options.headers,
      body: JSON.stringify({
      }),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((err) => Promise.reject(err));
  }

  getUserData() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      redirect: 'follow',
      credentials: 'include',
      method: 'GET',
      headers: this._options.headers,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .catch((err) => Promise.reject(err.status));
  }
}
