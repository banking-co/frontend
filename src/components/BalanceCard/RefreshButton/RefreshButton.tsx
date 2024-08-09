import { useCallback, useEffect, useMemo, useState } from "react";
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
  const [trigger, setTrigger] = useState(Date.now());

  const formatReloadDate = useMemo(() => {
    if (!balancesUpdatedAt) return t("time.ago.now");
    return timeAgo(new Date(balancesUpdatedAt).getTime());
  }, [balancesUpdatedAt, trigger]);

  const handleAnimate = useCallback(() => {
    if (isAnimateReloadBalance) return;
    setStartAnimateReloadBalance(true);
    setTimeout(() => setStartAnimateReloadBalance(false), 1000);
    props.handleReloadBalance && props.handleReloadBalance();
  }, [props.animateDelay, props.handleReloadBalance]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrigger(Date.now());
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Text
      className={props.className}
      text={formatReloadDate}
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
