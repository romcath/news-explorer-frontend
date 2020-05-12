# NewsExplorer

###### Версия проекта: 1.0.16

## О проекте
Сервис, в котором можно найти новости по запросу и сохранить в личном кабинете.
> Это дипломная работа, сделана в [Яндекс.Практикуме](https://praktikum.yandex.ru). Код проходил код-ревью.

Сайт состоит из двух страниц:
1. Главная. Содержит только окно поиска.
2. Страница с сохранёнными статьями. На ней отображаются новости, которые пользователь добавил в избранное.

Кроме этих страниц на сайте есть всплывающие окна:
1. с формой регистрации нового пользователя;
2. формой входа.

## Демо
[https://romcath.github.io/news-explorer-frontend](https://romcath.github.io/news-explorer-frontend/)
![alt-текст](https://raw.githubusercontent.com/romcath/news-explorer-frontend/level-2/src/images/demo.jpg "Demo NewsExplorer")

## Как проверить проект
### Всплывающие окна
#### Форма регистрации
1. Добавить в ```<div class="popup popup_signup">``` модификатор ```popup_is-opened```.
2. Чтобы кнопка ```Зарегистрироваться``` стала активной, добавить в ```<button type="submit" name="submit" class="button popup__button" disabled>Зарегистрироваться</button>``` модификатор ```popup__button_enabled```.

#### Форма входа
1. Добавить в ```<div class="popup popup_signin">``` модификатор ```popup_is-opened```.
2. Чтобы кнопка ```Вход``` стала активной, добавить в ```<button type="submit" name="submit" class="button popup__button" disabled>Войти</button>``` модификатор ```popup__button_enabled```.

#### Сообщение об успешной регистрации
Добавить в ```<div class="popup popup_success">``` модификатор ```popup_is-opened```.

### Блок с прелоудерером
Добавить в ```<section class="preloader root__section">``` модификатор ```preloader_enabled```.

### Блок «Ничего не найдено»
Добавить в ```<section class="no-results root__section">``` модификатор ```no-results_enable```.

### Блок «Результаты поиска»
Добавить в ```<section class="results root__results">``` модификатор ```results_enabled```.

### Мобильное меню
1. Добавить в ```<div class="overlay">``` модификатор ```overlay_enabled```.
2. Добавить в ```<nav class="menu">``` модификатор ```menu_mobile```.

> На странице с сохранёнными статьями ```articles.html``` для мобильного меню добавить модификатор ```menu_mobile_white```.

###  Шапка сайта залогиненного пользователя
1. В ```index.html``` раскоментировать:
```<ul class="menu__list">
  <li class="menu__item">
    <a href="articles/articles.html" class="menu__link">Сохранённые статьи</a>
  </li>
</ul>
```
```
<button type="submit" name="submit" class="button button_logout button_mobile">
  <span class="button__name">Грета</span>
  <i class="icon icon_logout_white"></i>
</button>
```
2. И закоментировать:
```
<button type="submit" name="submit" class="button button_mobile">
  <span class="button__name">Авторизоваться</span>
  <i class="icon icon_disabled"></i>
</button>
```

## Установка проекта
Клонируйте репозиторий на компьютер:

```https://github.com/romcath/news-explorer-frontend.git```


Установите зависисмости:

```npm install```

## Работа Webpack
Сборка для разработки:

```npm run dev```

Сборка для продакшн:

```npm run build```

Сборка в продакшн и деплой в ветку gh-pages:

```npm run deploy```
## Стек технологий
HTML, CSS, Webpack, GIT

