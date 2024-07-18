import "./AppLoading.sass";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames";

import { Placeholder, Spinner } from "uikit";

import { AppLoadingProps } from "./AppLoading.interface";
import { realtimeSelector } from "store/realtime";

export const AppLoading: AppLoadingProps = (props) => {
  const { isConnected } = useSelector(realtimeSelector);
  const [isLoading, setLoading] = useState(true);
  const [isClose, setClose] = useState(false);

  if (!isConnected)
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
