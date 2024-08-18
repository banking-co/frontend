import { Currency } from "models";

import Russia from "assets/flags/4x3/ru.svg";
import Belarus from "assets/flags/4x3/by.svg";
import Europe from "assets/flags/4x3/eu.svg";
import American from "assets/flags/4x3/us.svg";

const flags: Partial<{ [key in Currency]: string }> = {
  [Currency.Rub]: Russia,
  [Currency.Usd]: American,
  [Currency.Byn]: Belarus,
  [Currency.Eur]: Europe,
};

export const getCountryFlag = (currency: Currency) => flags[currency];
