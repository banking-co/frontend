import "./BalanceCard.sass";

import { createMemo, createSignal } from "solid-js";
import { useTranslation, useTimeAgo } from "hooks";
import { formatCurrency } from "utils";

import { Line, Column, Tag, Text } from "uikit";

import { IconReload } from "assets/icons/";

import { BalanceCardProps } from "./BalanceCard.interface";

export const BalanceCard: BalanceCardProps = (props) => {
  const t = useTranslation();
  const timeAgo = useTimeAgo();
  const [currentBalance, setCurrentBalance] = createSignal<0 | 1 | 2>(0);

  const forattedReloadDate = createMemo(() =>
    timeAgo(new Date(Date.now() - 12333412).getTime()),
  );

  const currentBalanceText = {
    0: t("app.balances.primary"),
    1: t("app.balances.secondary"),
    2: t("app.balances.tertiary"),
  };

  return (
    <Column classList={{ BalanceCard: true }} gap={8}>
      <Line gap={4}>
        <Text
          text={currentBalanceText[currentBalance()]}
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
            {props.balances[currentBalance()].symbol}
          </div>
          <Text
            text={formatCurrency(props.balances[currentBalance()].count, {
              symbol: "",
            })}
            tag={"h1"}
          />
        </Line>
        <Text
          text={forattedReloadDate()}
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
          text={t("app.balances.about", { type: "РЕЙТИНГЕ" })}
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
