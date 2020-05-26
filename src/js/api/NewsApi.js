export default class NewsApi {
  constructor(options, calculateDate) {
    this._options = options;
    this._calculateDate = calculateDate || (() => {});
    this._calculateDate = this._calculateDate.bind(this);
  }

  getNews(request) {
    const { dateTo, dateFrom } = this._calculateDate();
    const { baseUrl, sortBy, apiKey, pageSize } = this._options;

    return fetch(`${baseUrl}q=${request}&from=${dateFrom}&to=${dateTo}&sortBy=${sortBy}&pageSize=${pageSize}&apiKey=${apiKey}`, {
      method: 'GET',
    })
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .catch((err) => Promise.reject(err.message));
  }
}