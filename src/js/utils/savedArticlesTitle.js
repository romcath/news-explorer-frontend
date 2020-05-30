/* eslint-disable import/prefer-default-export */
import { capitalizeFirstLetter } from './capitalizeFirstLetter';

export const savedArticlesTitle = (name, articlesCount) => {
  if (articlesCount > 4 && articlesCount < 21) {
    return `${capitalizeFirstLetter(name)}, у вас ${articlesCount} сохраненных статей`;
  }
  if (articlesCount === 1) {
    return `${capitalizeFirstLetter(name)}, у вас ${articlesCount} сохраненная статья`;
  }
  if (articlesCount > 1 && articlesCount < 5) {
    return `${capitalizeFirstLetter(name)}, у вас ${articlesCount} сохраненных статьи`;
  }
  return `${capitalizeFirstLetter(name)}, у вас ${articlesCount} сохраненных статей`;
};