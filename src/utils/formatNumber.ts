export const formatNumber = (
  value: number,
  isMoney: boolean = false,
): string => {
  let formattedValue: string = value.toLocaleString("ru-RU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: isMoney ? 2 : 10,
  });

  if (isMoney) {
    formattedValue = formattedValue.replace(/\.00$/, "") + " ₽";
  }

  return formattedValue;
};
