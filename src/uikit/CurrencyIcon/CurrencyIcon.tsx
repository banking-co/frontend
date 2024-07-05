import type { FC } from "react";

import {
  IconCurrencyBitcoin,
  IconCurrencyDollar,
  IconDiamond,
} from "@tabler/icons-react";

import { TextCurrencyType } from "store/models";

export const CurrencyIcon: FC<{ currencyType: TextCurrencyType }> = (props) => {
  const currencyIcon = {
    [TextCurrencyType.Dollar]: <IconCurrencyDollar />,
    [TextCurrencyType.Bitcoin]: <IconCurrencyBitcoin />,
    [TextCurrencyType.Donate]: <IconDiamond />,
  };

  return (
    <div className="Text__currency-icon">
      {currencyIcon[props.currencyType || TextCurrencyType.Dollar]}
    </div>
  );
};
