import {
  IconBolt,
  IconCashBanknote,
  IconChartLine,
  IconCoins,
  IconCreditCardPay,
  IconDots,
  IconFiles,
  IconInfoSquareRounded,
  IconMoneybag,
  IconRosetteDiscount,
  IconSparkles,
  IconUserMinus,
  IconUsers,
  IconUserSearch,
  IconWalk,
} from "@tabler/icons-react";
import { ListItemsModel, Modals, RouteId } from "models";

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
        type: "modal",
        modal: Modals.BankRating,
        icon: <IconChartLine />,
        translate_key: `bank.rating`,
      },
      {
        type: "route",
        to: RouteId.ManagementBusinessTransactions,
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
        to: RouteId.ManagementContractsList,
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
        to: RouteId.ManagementEmployeeList,
        icon: <IconUsers />,
        translate_key: `employment.list`,
      },
      {
        type: "route",
        to: RouteId.ManagementEmployeeSearch,
        icon: <IconUserSearch />,
        translate_key: `employment.search`,
      },
      {
        type: "route",
        to: RouteId.ManagementEmployeeSalary,
        icon: <IconCoins />,
        translate_key: `employment.salary`,
      },
      {
        type: "route",
        to: RouteId.ManagementEmployeeDismiss,
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
        to: RouteId.ManagementBoostUpgrade,
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
        to: RouteId.ManagementTaxPay,
        icon: <IconCashBanknote />,
        translate_key: `tax.pay`,
      },
      {
        type: "route",
        to: RouteId.ManagementTaxBenefits,
        icon: <IconSparkles />,
        translate_key: `tax.benefits`,
      },
      {
        type: "route",
        to: RouteId.ManagementTaxReduce,
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
