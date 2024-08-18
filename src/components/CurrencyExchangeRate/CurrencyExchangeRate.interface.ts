import type { FC, HTMLAttributes } from "react";
import { Currency } from "models";

export interface CurrencyExchangeRateItem {
  type: Currency;
  exchange: {
    sell: number;
    buy: number;
  };
}

interface CurrencyExchangeRateParams extends HTMLAttributes<HTMLElement> {}

export type CurrencyExchangeRateProps = FC<CurrencyExchangeRateParams>;
