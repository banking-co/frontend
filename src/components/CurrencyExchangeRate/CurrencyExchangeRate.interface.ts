import type { Component, JSX } from "solid-js";
import { Currency } from "store/models";

export interface CurrencyExchangeRateItem {
  type: Currency;
  exchange: {
    sell: number;
    buy: number;
  };
}

interface CurrencyExchangeRateParams extends JSX.HTMLAttributes<HTMLElement> {}

export type CurrencyExchangeRateProps = Component<CurrencyExchangeRateParams>;
