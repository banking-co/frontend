import type { ItemsIds, ItemsIcons } from "./Menu.interface";

import {
  IconAdjustmentsHorizontal,
  IconArchive,
  IconBriefcase2,
  IconBrush,
  IconCat,
  IconClick,
  IconCoin,
  IconDiamond,
  IconGavel,
  IconLanguage,
  IconMap,
  IconShoppingCart,
  IconSquareRoundedPercentage,
  IconTrolley,
} from "@tabler/icons-react";

export const itemsIds: ItemsIds = {
  user: ["inventory"],
  entertainments: ["quests", "coin", "clicker", "bag"],
  store: ["stocks", "store", "donate", "market", "auction"],
  settings: ["settings"],
  wiki: ["how_start"],
};

export const itemsIcons: ItemsIcons = {
  inventory: <IconArchive />,
  stocks: <IconSquareRoundedPercentage />,
  store: <IconShoppingCart />,
  auction: <IconGavel />,
  market: <IconTrolley />,
  donate: <IconDiamond />,
  clicker: <IconClick />,
  coin: <IconCoin />,
  bag: <IconCat />,
  quests: <IconMap />,
  settings: <IconAdjustmentsHorizontal />,
  language: <IconLanguage />,
  theme: <IconBrush />,
  how_start: <IconBriefcase2 />,
};
