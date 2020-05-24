export const calculateDate = () => {
  const days = 7;
  const date = new Date();
  const last = new Date(date.getTime() - (days * 24 * 60 * 60 * 1000));
  const dateTo = date.toISOString();
  const dateFrom = last.toISOString();
  return { dateTo, dateFrom };
}