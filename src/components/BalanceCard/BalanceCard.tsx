import "./BalanceCard.sass";

import { createMemo, createSignal } from "solid-js";
import { useTranslation } from "hooks";
import { formatCurrency } from "utils";

import { Line, Column, Tag, Text } from "uikit";

import { IconReload } from "assets/icons/";

import { BalanceCardProps } from "./BalanceCard.interface";
import { useTimeAgo } from "../../hooks/useTimeAgo";

export const BalanceCard: BalanceCardProps = (props) => {
  const t = useTranslation();
  const timeAgo = useTimeAgo();
  const [currentBalance, setCurrentBalance] = createSignal<1 | 2>(1);

  const forattedReloadDate = createMemo(() =>
    timeAgo(new Date(Date.now() - 12333412).getTime()),
  );

  return (
    <Column classList={{ BalanceCard: true }} gap={8}>
      <Line gap={4}>
        <Text
          text={t(
            currentBalance() === 1
              ? "app.balances.first"
              : "app.balances.second",
          )}
          tag={"span"}
          isAccent
          onClick={() => setCurrentBalance(currentBalance() === 1 ? 2 : 1)}
        />
        <Text text={t("app.balances.name")} tag={"span"} isMuted />
      </Line>
      <Line gap={8}>
        <Text
          text={formatCurrency(props.balances[currentBalance()].count, {
            symbol: props.balances[currentBalance()].symbol,
          })}
          tag={"h1"}
        />
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
          text={t("app.balances.about", { type: "РЕЙТИНГе" })}
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
