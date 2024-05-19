import "./BalanceCard.sass";

import { createMemo, createSignal } from "solid-js";
import { useTranslation, useTimeAgo } from "hooks";
import { formatCurrency } from "utils";

import { Line, Column, Tag, Text } from "uikit";

import {
  IconCurrencyBitcoin,
  IconCurrencyDollar,
  IconDiamond,
  IconReload,
} from "assets/icons/";

import { BalanceCardProps } from "./BalanceCard.interface";

export const BalanceCard: BalanceCardProps = (props) => {
  const t = useTranslation();
  const timeAgo = useTimeAgo();
  const [currentBalance, setCurrentBalance] = createSignal<0 | 1 | 2>(0);

  const balances = {
    0: {
      count: 2323242,
      symbol: <IconCurrencyDollar />,
      text: t("app.balances.primary"),
    },
    1: {
      count: 213412412,
      symbol: <IconCurrencyBitcoin />,
      text: t("app.balances.secondary"),
    },
    2: {
      count: 23424,
      symbol: <IconDiamond />,
      text: t("app.balances.tertiary"),
    },
  };

  const formatReloadDate = createMemo(() =>
    timeAgo(new Date(Date.now() - 12333412).getTime()),
  );

  return (
    <Column classList={{ BalanceCard: true }} gap={8}>
      <Line gap={4}>
        <Text
          text={balances[currentBalance()].text}
          tag={"span"}
          isAccent
          onClick={() =>
            setCurrentBalance((value) => {
              if (value >= 2) {
                return 0;
              }

              return Number(value + 1) as 0 | 1 | 2;
            })
          }
        />
        <Text text={t("app.balances.name")} tag={"span"} isMuted />
      </Line>
      <Line gap={8}>
        <Line gap={4}>
          <div class="BalanceCard__icon-balance">
            {balances[currentBalance()].symbol}
          </div>
          <Text
            text={formatCurrency(balances[currentBalance()].count, {
              symbol: "",
            })}
            tag={"h1"}
          />
        </Line>
        <Text
          text={formatReloadDate()}
          tag="span"
          linkIcon={<IconReload />}
          isLink
          reverse
          isMuted
        />
      </Line>
      <Line gap={12}>
        {props.tags?.map((item) => {
          return <Tag icon={item.icon} value={item.text} mode={item.mode} />;
        })}
        <Text
          text={t("about.title", { type: t("about.balance") })}
          tag={"span"}
          onClick={() => console.log("click")}
          isMuted
          isLink
          isAccentChevron
        />
      </Line>
    </Column>
  );
};
