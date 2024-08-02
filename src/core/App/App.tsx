import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import { AppContainer } from "uikit";
import { AppLoading } from "../AppLoading/AppLoading";

import { realtimeActions } from "store/realtime";

import type { AppProps } from "./interface";

export const App: AppProps = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(realtimeActions.connection());
  }, []);

  return (
    <AppLoading>
      <AppContainer children={<Outlet />} />
    </AppLoading>
  );
};
