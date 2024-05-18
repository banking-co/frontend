export const calculatingRating = (num: number): string => {
  if (!num || num > 100) {
    return "100+";
  } else if (num < 1) {
    return "1";
  } else {
    return `${num}`;
  }
};
