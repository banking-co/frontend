import "./AppLoading.sass";

import { useEffect, useState } from "react";
import classNames from "classnames";

import { Placeholder, Spinner } from "uikit";

import { AppLoadingProps } from "./AppLoading.interface";

export const AppLoading: AppLoadingProps = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [isClose, setClose] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setClose(true);

      setTimeout(() => {
        setLoading(false);
      }, 700);
    }, 3000);
  }, []);

  if (isLoading)
    return (
      <Placeholder
        isFullScreen
        className={classNames({
          "AppLoading_animation-fade_out": isClose,
        })}
      >
        <Spinner />
      </Placeholder>
    );

  return <>{props.children}</>;
};
