interface Options {
  symbol: string;
}

export const formatCurrency = (cents: number, options?: Options): string => {
  if (cents < 1) {
    cents = 0;
  }

  if (cents >= Number.MAX_SAFE_INTEGER) {
    cents = Number.MAX_SAFE_INTEGER;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return `${options?.symbol || ""}${formatter.format(cents / 100)}`;
};
