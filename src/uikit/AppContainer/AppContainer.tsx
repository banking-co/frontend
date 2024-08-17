import "./AppContainer.sass";

import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import classNames from "classnames";

import { AppHeader, BottomNavbar, Placeholder, Spinner } from "uikit";

import { realtimeSelector } from "store/realtime";

import type { AppContainerProps } from "./AppContainer.interface";

export const AppContainer: AppContainerProps = (props) => {
  const location = useLocation();
  const [showBackButton, setShowBackButton] = useState(false);
  const { isLoggedIn, isConnected } = useSelector(realtimeSelector);

  useEffect(() => {
    const path = location.pathname;
    if (path !== "/" && path !== "/menu") {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location.pathname]);

  if (!isConnected && isLoggedIn) {
    return (
      <Placeholder isFullPage isCenter>
        <Spinner />
      </Placeholder>
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
};
