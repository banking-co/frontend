import "./BalanceCard.sass";

import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "i18nano";
import { formatCurrency } from "utils";
import { useTimeAgo, useUser } from "hooks";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import { Position, Tag, Text } from "uikit";

import { Currency, SocketEvent } from "store/models";
import { realtimeActions } from "store/realtime";
import { balancesSelector } from "store/balances";

import {
  IconCurrencyBitcoin,
  IconCurrencyDollar,
  IconDiamond,
  IconReload,
} from "@tabler/icons-react";

import type { BalanceCardProps } from "./BalanceCard.interface";

export const BalanceCard: BalanceCardProps = (props) => {
  const t = useTranslation();
  const dispatch = useDispatch();
  const timeAgo = useTimeAgo();
  const user = useUser();
  const [currentBalance, setCurrentBalance] = useState<0 | 1 | 2>(0);
  const [isAnimateBalance, setStartAnimateBalance] = useState(false);
  const [isAnimateReloadBalance, setStartAnimateReloadBalance] =
    useState(false);
  const { balances } = useSelector(balancesSelector);
  const balanceAnimateDelay = 150;

  const userBalances = useMemo(
    () => (user?.id ? balances[user.id] : []),
    [balances, user],
  );

  const textBalances: Partial<{ [key in Currency]: string }> = {
    [Currency.Usd]: t("balances.primary"),
    [Currency.Btc]: t("balances.secondary"),
    [Currency.Donate]: t("balances.tertiary"),
  };

  const formatReloadDate = useMemo(
    () => timeAgo(new Date(Date.now() - 12333412).getTime()),
    [],
  );

  const iconCurrency = useMemo(() => {
    switch (userBalances[currentBalance].currency) {
      case Currency.Btc:
        return <IconCurrencyBitcoin size={28} />;
      case Currency.Donate:
        return <IconDiamond size={28} />;
      case Currency.Usd:
      default:
        return <IconCurrencyDollar size={28} />;
    }
  }, [userBalances, currentBalance]);

  const handleChangeBalance = useCallback(() => {
    if (isAnimateBalance) return;
    setStartAnimateBalance(true);
    setTimeout(() => setStartAnimateBalance(false), balanceAnimateDelay);
    setTimeout(
      () =>
        setCurrentBalance((value) => {
          if (value >= 2) {
            return 0;
          }

          return Number(value + 1) as 0 | 1 | 2;
        }),
      balanceAnimateDelay,
    );
  }, [isAnimateBalance, balanceAnimateDelay]);

  const handleReloadBalance = useCallback(() => {
    if (isAnimateReloadBalance) return;
    setStartAnimateReloadBalance(true);
    setTimeout(() => setCurrentBalance(0), balanceAnimateDelay);
    setTimeout(() => setStartAnimateReloadBalance(false), 1000);
    dispatch(
      realtimeActions.sendMessage({
        event: SocketEvent.GetBalances,
      }),
    );
  }, [isAnimateReloadBalance, isAnimateBalance, balanceAnimateDelay]);

  return (
    <Position type="column" className="BalanceCard" gap={8}>
      <Position type="line" gap={4}>
        <Text
          text={textBalances[userBalances[currentBalance].currency] || ""}
          tag={"span"}
          isAccent
          onClick={handleChangeBalance}
        />
        <Text text={t("balances.name")} tag={"span"} isMuted />
      </Position>
      <Position type="line" gap={8} alignItems={"center"}>
        <div
          className={classNames(
            "BalanceCard__currency",
            "BalanceCard_animate",
            {
              "BalanceCard__currency-diamond":
                userBalances[currentBalance].currency === Currency.Donate,
              "BalanceCard_animate--hide": isAnimateBalance,
              "BalanceCard_animate--open": !isAnimateBalance,
            },
          )}
        >
          {iconCurrency}
          <Text
            text={formatCurrency(userBalances[currentBalance].amount)}
            tag={"h1"}
          />
        </div>
        <Text
          className={classNames("BalanceCard_animate", {
            "BalanceCard_animate--hide": isAnimateBalance,
            "BalanceCard_animate--open": !isAnimateBalance,
          })}
          text={formatReloadDate}
          tag="span"
          linkIcon={
            <IconReload
              className={classNames({
                "BalanceCard_animate-reload": isAnimateReloadBalance,
              })}
            />
          }
          onClick={handleReloadBalance}
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
