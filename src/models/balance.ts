import { ModelsDefaultKeys } from "models";

export enum Currency {
  Rub = "rub",
  Eur = "eur",
  Byn = "byn",
  Usd = "usd",
  Btc = "btc",
  Donate = "donate",
}

export enum TextCurrencyType {
  Dollar = "usd",
  Bitcoin = "btc",
  Donate = "donate",
}

export interface BalanceModel extends ModelsDefaultKeys {
  importance: number;
  userId: number;
  amount: number;
  currency: Currency;
}
