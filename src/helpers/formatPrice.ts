export const formatPrice = (price: number): number | string => {
  if (price >= 1000) {
    return Math.round((price / 1000) * 10) / 10 + 'k';
  }
  return Math.round(price);
};
