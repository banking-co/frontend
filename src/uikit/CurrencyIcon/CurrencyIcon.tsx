import { Component } from "solid-js";

import {
  IconCurrencyBitcoin,
  IconCurrencyDollar,
  IconDiamond,
} from "assets/icons";

import { TextCurrencyType } from "store/models";

export const CurrencyIcon: Component<{ currencyType: TextCurrencyType }> = (
  props,
) => {
  const currencyIcon = {
    [TextCurrencyType.Dollar]: <IconCurrencyDollar />,
    [TextCurrencyType.Bitcoin]: <IconCurrencyBitcoin />,
    [TextCurrencyType.Donate]: <IconDiamond />,
  };

  return (
    <div class="Text__currency-icon">
      {currencyIcon[props.currencyType || TextCurrencyType.Dollar]}
    </div>
  );
};
