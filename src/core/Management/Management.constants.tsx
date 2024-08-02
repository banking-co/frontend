import type { ItemsIds, ItemsIcons } from "./Management.interface";

import {
  IconCoins,
  IconInfoSquareRounded,
  IconChartLine,
  IconCreditCardPay,
  IconDots,
  IconUserSearch,
  IconUserMinus,
  IconSparkles,
  IconRosetteDiscount,
  IconCashBanknote,
  IconBolt,
  IconWalk,
  IconMoneybag,
  IconChecklist,
  IconScript,
  IconFileSearch,
} from "@tabler/icons-react";

export const itemsIds: ItemsIds = {
  bank: ["info", "rating", "transactions", "more"],
  contracts: ["take_contract", "close_contract"],
  employment: ["recruit", "salary", "dismiss"],
  boost: ["boost_bank"],
  tax: ["pay_tax", "benefits", "reduce_tax"],
  wiki: ["how_start", "how_start_make_money"],
};

export const itemsIcons: ItemsIcons = {
  recruit: <IconUserSearch />,
  info: <IconInfoSquareRounded />,
  rating: <IconChartLine />,
  transactions: <IconCreditCardPay />,
  more: <IconDots />,
  salary: <IconCoins />,
  dismiss: <IconUserMinus />,
  pay_tax: <IconCashBanknote />,
  benefits: <IconSparkles />,
  reduce_tax: <IconRosetteDiscount />,
  boost_bank: <IconBolt />,
  how_start: <IconWalk />,
  how_start_make_money: <IconMoneybag />,
  take_contract: <IconFileSearch />,
  close_contract: <IconChecklist />,
};
