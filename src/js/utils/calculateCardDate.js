/* eslint-disable import/prefer-default-export */
import { MONTHS } from '../constants/constants';

export const calculateCardDate = (date) => {
  const initialDate = new Date(date);
  const day = initialDate.getDate();
  const month = initialDate.getMonth();
  const year = initialDate.getFullYear();
  return `${day} ${MONTHS[month]}, ${year}`;
};