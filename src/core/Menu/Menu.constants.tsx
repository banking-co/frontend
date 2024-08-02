import type { ItemsIds, ItemsIcons } from "./Menu.interface";

import {
  IconAdjustmentsHorizontal,
  IconBrush,
  IconCat,
  IconClick,
  IconCoin,
  IconHammer,
  IconLanguage,
  IconMap,
} from "@tabler/icons-react";

export const itemsIds: ItemsIds = {
  entertainments: ["quests", "coin", "clicker", "bag"],
  settings: ["language", "theme", "more"],
  wiki: ["how_start"],
};

export const itemsIcons: ItemsIcons = {
  clicker: <IconClick />,
  coin: <IconCoin />,
  bag: <IconCat />,
  quests: <IconMap />,
  more: <IconAdjustmentsHorizontal />,
  language: <IconLanguage />,
  theme: <IconBrush />,
  how_start: <IconHammer />,
};
