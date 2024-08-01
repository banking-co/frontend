import "./BalanceCard.sass";

import { useMemo, useState } from "react";
import { useTranslation } from "i18nano";
import { formatCurrency } from "utils";
import { useTimeAgo } from "hooks";
import classNames from "classnames";

import { Position, Tag, Text } from "uikit";

import { BalanceCardProps } from "./BalanceCard.interface";
import { TextCurrencyType } from "store/models";

import {
  IconCurrencyDollar,
  IconCurrencyBitcoin,
  IconDiamond,
  IconReload,
} from "@tabler/icons-react";

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

  const iconCurrency = useMemo(() => {
    switch (balances[currentBalance].currencyType) {
      case TextCurrencyType.Bitcoin:
        return <IconCurrencyBitcoin size={28} />;
      case TextCurrencyType.Donate:
        return <IconDiamond size={28} />;
      default:
        return <IconCurrencyDollar size={28} />;
    }
  }, [balances, currentBalance]);

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
        <div
          className={classNames("BalanceCard__currency", {
            "BalanceCard__currency-diamond":
              balances[currentBalance].currencyType === TextCurrencyType.Donate,
          })}
        >
          {iconCurrency}
          <Text
            text={formatCurrency(balances[currentBalance].count)}
            tag={"h1"}
          />
        </div>
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
        {props.tags?.map((item) => (
          <Tag
            key={`tag-${item.mode}-${item.text}`}
            icon={item.icon}
            value={item.text}
            mode={item.mode}
          />
        ))}
        <Text
          text={t("about.title", { type: t("about.balance") })}
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
