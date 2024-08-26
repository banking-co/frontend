import "./AppContainer.sass";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { memo, useEffect, useState } from "react";
import { useTranslation } from "i18nano";
import classNames from "classnames";

import { AppHeader, BottomNavbar, Placeholder, Spinner } from "uikit";

import { realtimeSelector } from "store/realtime";

import type { AppContainerProps } from "./AppContainer.interface";
import { useModal } from "hooks";

export const AppContainer: AppContainerProps = memo((props) => {
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);
  const [isReconnectionStatus, setReconnectionStatus] = useState(false);
  const { isLoggedIn, isConnected } = useSelector(realtimeSelector);
  const { closeModal } = useModal();
  const t = useTranslation();

  useEffect(() => {
    const path = location.pathname;
    if (path !== "/" && path !== "/menu") {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isConnected && isLoggedIn) {
      closeModal();
      setReconnectionStatus(true);
    } else {
      setReconnectionStatus(false);
    }
  }, [isConnected, isLoggedIn]);

  if (isReconnectionStatus) {
    return (
      <Placeholder
        icon={<Spinner />}
        title={t("errors.connection_retry.title")}
        text={t("errors.connection_retry.description")}
        isFullScreen
        isCenter
      />
    );
  }

  return (
    <div
      className={classNames({
        AppContainer: true,
        [`${props.className}`]: !!props.className,
      })}
    >
      <AppHeader withBack={showBackButton} />
      <div className="AppContainer__container">
        <div className="AppContainer__wrapper">{props.children}</div>
      </div>
      <BottomNavbar />
    </div>
  );
});
