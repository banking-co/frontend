interface Options {
  symbol: string;
}

export const formatCurrency = (cents: number, options?: Options): string => {
  if (cents < 1) {
    cents = 1;
  }

  if (cents >= Number.MAX_SAFE_INTEGER) {
    cents = Number.MAX_SAFE_INTEGER;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formatter.format(cents / 100).replace("$", options?.symbol || "$");
};
