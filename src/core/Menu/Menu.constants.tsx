import {
  IconBolt,
  IconBriefcase2,
  IconCat,
  IconClick,
  IconCoin,
  IconDiamond,
  IconGavel,
  IconInfoSquareRounded,
  IconMap,
  IconShoppingCart,
  IconSquareRoundedPercentage,
  IconTrolley,
} from "@tabler/icons-react";
import { ListItemsModel, Modals, RouteId } from "models";

const route = "/menu";

export const items: ListItemsModel = [
  {
    title: `user.profile`,
    description: `user.profile_description`,
    children: [
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconInfoSquareRounded />,
        translate_key: `user.inventory`,
      },
    ],
  },
  {
    title: `entertainments.title`,
    description: `entertainments.description`,
    children: [
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconMap />,
        translate_key: `entertainments.quests`,
      },
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconCoin />,
        translate_key: `entertainments.coin`,
      },
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconClick />,
        translate_key: `entertainments.clicker`,
      },
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconCat />,
        translate_key: `entertainments.bag`,
      },
    ],
  },
  {
    title: `store.title`,
    description: `store.description`,
    children: [
      {
        type: "route",
        to: RouteId.MenuStoreStock,
        icon: <IconSquareRoundedPercentage />,
        translate_key: `store.stocks`,
      },
      {
        type: "route",
        to: RouteId.MenuStoreStore,
        icon: <IconShoppingCart />,
        translate_key: `store.store`,
      },
      {
        type: "route",
        to: RouteId.MenuStoreDonate,
        icon: <IconDiamond />,
        translate_key: `store.donate`,
      },
      {
        type: "route",
        to: RouteId.MenuStoreMarket,
        icon: <IconTrolley />,
        translate_key: `store.market`,
      },
      {
        type: "route",
        to: RouteId.MenuStoreAuction,
        icon: <IconGavel />,
        translate_key: `store.auction`,
      },
    ],
  },
  {
    title: `wiki.title`,
    description: `wiki.description`,
    children: [
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconBriefcase2 />,
        translate_key: `wiki.how_start`,
      },
    ],
  },
];
