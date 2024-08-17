import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "i18nano";
import { useTimeAgo } from "hooks";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { Text } from "uikit";

import { balancesSelector } from "store/balances";

import { IconReload } from "@tabler/icons-react";

import type { RefreshButtonProps } from "./RefreshButton.interface";

export const RefreshButton: RefreshButtonProps = (props) => {
  const t = useTranslation();
  const timeAgo = useTimeAgo();
  const [isAnimateReloadBalance, setStartAnimateReloadBalance] =
    useState(false);
  const { balancesUpdatedAt } = useSelector(balancesSelector);
  const [formattedDate, setFormattedDate] = useState(
    !!balancesUpdatedAt ? timeAgo(balancesUpdatedAt) : t("time.ago.now"),
  );

  const formatDate = () => {
    const date = !!balancesUpdatedAt && timeAgo(balancesUpdatedAt);

    if (date && formattedDate !== date) {
      setFormattedDate(date);
    }
  };

  const handleAnimate = useCallback(() => {
    if (isAnimateReloadBalance) return;
    setStartAnimateReloadBalance(true);
    setTimeout(() => setStartAnimateReloadBalance(false), 1000);
    props.handleReloadBalance && props.handleReloadBalance();
  }, [props.animateDelay, props.handleReloadBalance]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      formatDate();
    }, 250);

    return () => clearInterval(intervalId);
  }, [balancesUpdatedAt]);

  return (
    <Text
      className={props.className}
      text={formattedDate}
      tag="span"
      linkIcon={
        <IconReload
          className={classNames({
            "BalanceCard_animate-reload": isAnimateReloadBalance,
          })}
        />
      }
      onClick={handleAnimate}
      isLink
      reverse
      isMuted
    />
  );
};
