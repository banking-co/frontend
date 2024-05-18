export const calculatePercentageInRange = (
  start: number,
  end: number,
  value: number,
): string | undefined => {
  if (start === end) {
    return undefined;
  }

  const min = Math.min(start, end);
  const max = Math.max(start, end);

  if (value < min || value > max) {
    return undefined;
  }

  const range = max - min;
  const percentage = ((value - min) / range) * 100;

  return percentage.toFixed(2);
};
