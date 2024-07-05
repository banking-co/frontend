import "./AppContainer.sass";

import classNames from "classnames";

import { AppHeader, BottomNavbar } from "uikit";

import type { AppContainerProps } from "./AppContainer.interface";

export const AppContainer: AppContainerProps = (props) => {
  return (
    <div
      className={classNames({
        AppContainer: true,
        [`${props.className}`]: !!props.className,
      })}
    >
      <AppHeader withBack={false} />
      <div className="AppContainer__container">
        <div className="AppContainer__wrapper">{props.children}</div>
      </div>
      <BottomNavbar />
    </div>
  );
};
