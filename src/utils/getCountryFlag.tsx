import { Currency } from "store/models";

import Russia from "assets/flags/4x3/ru.svg";
import Belarus from "assets/flags/4x3/by.svg";
import Europe from "assets/flags/4x3/eu.svg";
import American from "assets/flags/4x3/us.svg";

const flags = {
  [Currency.RUB]: <Russia />,
  [Currency.USD]: <American />,
  [Currency.BYN]: <Belarus />,
  [Currency.EUR]: <Europe />,
};

export const getCountryFlag = (currency: Currency) => flags[currency];
