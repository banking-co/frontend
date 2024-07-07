import "./BalanceCard.sass";

import { useMemo, useState } from "react";
import { useTranslation } from "i18nano";
import { useTimeAgo } from "hooks";
import { formatCurrency } from "utils";

import { Position, Tag, Text } from "uikit";

import { BalanceCardProps } from "./BalanceCard.interface";
import { TextCurrencyType } from "store/models";

import { IconReload } from "@tabler/icons-react";

export const BalanceCard: BalanceCardProps = (props) => {
  const t = useTranslation();
  const timeAgo = useTimeAgo();
  const [currentBalance, setCurrentBalance] = useState<0 | 1 | 2>(0);

  const balances = {
    0: {
      count: 123,
      currencyType: TextCurrencyType.Dollar,
      text: t("app.balances.primary"),
    },
    1: {
      count: 213412412,
      currencyType: TextCurrencyType.Bitcoin,
      text: t("app.balances.secondary"),
    },
    2: {
      count: 23424,
      currencyType: TextCurrencyType.Donate,
      text: t("app.balances.tertiary"),
    },
  };

  const formatReloadDate = useMemo(
    () => timeAgo(new Date(Date.now() - 12333412).getTime()),
    [],
  );

  return (
    <Position type="column" className="BalanceCard" gap={8}>
      <Position type="line" gap={4}>
        <Text
          text={balances[currentBalance].text}
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
      </Position>
      <Position type="line" gap={8} alignItems={"center"}>
        <Text
          text={formatCurrency(balances[currentBalance].count)}
          isCurrency
          currencyType={balances[currentBalance].currencyType}
          tag={"h1"}
        />
        <Text
          text={formatReloadDate}
          tag="span"
          linkIcon={<IconReload />}
          isLink
          reverse
          isMuted
        />
      </Position>
      <Position type="line" gap={12}>
        {props.tags?.map((item) => {
          return <Tag icon={item.icon} value={item.text} mode={item.mode} />;
        })}
        <Text
          text={t("about.title", { "type": t("about.balance") })}
          tag={"span"}
          onClick={() => console.log("click")}
          isMuted
          isLink
          isAccentChevron
        />
      </Position>
    </Position>
  );
};
