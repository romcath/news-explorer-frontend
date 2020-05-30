/* eslint-disable import/prefer-default-export */
export const sortKeyWords = (items) => {
  const repeatCount = items.map((news) => news.keyword).reduce((acc, tag) => {
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});

  const sortedArray = Object.keys(repeatCount).map((tag) => [tag, repeatCount[tag]]);
  sortedArray.sort((a, b) => b[1] - a[1]);
  return sortedArray.map((elem) => elem[0]);
};