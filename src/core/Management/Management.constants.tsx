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
  IconUsers,
  IconFiles,
} from "@tabler/icons-react";
import { ListItemsModel, Modals } from "models";

const route = "/management";

export const items: ListItemsModel = [
  {
    title: `bank.title`,
    description: `bank.description`,
    children: [
      {
        type: "modal",
        modal: Modals.RenameBank,
        icon: <IconInfoSquareRounded />,
        translate_key: `bank.info`,
      },
      {
        type: "route",
        to: `${route}/bank/rating`,
        icon: <IconChartLine />,
        translate_key: `bank.rating`,
      },
      {
        type: "route",
        to: `${route}/bank/transactions`,
        icon: <IconCreditCardPay />,
        translate_key: `bank.transactions`,
      },
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconDots />,
        translate_key: `bank.more`,
      },
    ],
  },
  {
    title: `contracts.title`,
    description: `contracts.description`,
    children: [
      {
        type: "route",
        to: `${route}/contracts/list`,
        icon: <IconFiles />,
        translate_key: `contracts.list`,
      },
    ],
  },
  {
    title: `employment.title`,
    description: `employment.description`,
    children: [
      {
        type: "route",
        to: `${route}/employment/list`,
        icon: <IconUsers />,
        translate_key: `employment.list`,
      },
      {
        type: "route",
        to: `${route}/employment/search`,
        icon: <IconUserSearch />,
        translate_key: `employment.search`,
      },
      {
        type: "route",
        to: `${route}/employment/salary`,
        icon: <IconCoins />,
        translate_key: `employment.salary`,
      },
      {
        type: "route",
        to: `${route}/employment/dismiss`,
        icon: <IconUserMinus />,
        translate_key: `employment.dismiss`,
      },
    ],
  },
  {
    title: `boost.title`,
    description: `boost.description`,
    children: [
      {
        type: "route",
        to: `${route}/boost/upgrade`,
        icon: <IconBolt />,
        translate_key: `boost.upgrade`,
      },
    ],
  },
  {
    title: `tax.title`,
    description: `tax.description`,
    children: [
      {
        type: "route",
        to: `${route}/tax/pay`,
        icon: <IconCashBanknote />,
        translate_key: `tax.pay`,
      },
      {
        type: "route",
        to: `${route}/tax/benefits`,
        icon: <IconSparkles />,
        translate_key: `tax.benefits`,
      },
      {
        type: "route",
        to: `${route}/tax/reduce`,
        icon: <IconRosetteDiscount />,
        translate_key: `tax.reduce`,
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
        icon: <IconWalk />,
        translate_key: `wiki.how_start`,
      },
      {
        type: "modal",
        modal: Modals.Bonus,
        icon: <IconMoneybag />,
        translate_key: `wiki.how_start_make_money`,
      },
    ],
  },
];
