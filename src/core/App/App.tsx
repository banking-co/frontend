import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import { AppContainer } from "uikit";
import { AppLoading } from "../AppLoading/AppLoading";

import { realtimeActions } from "store/realtime";

import type { AppProps } from "./App.interface";
import { SocketEvent } from "../../store/models";

export const App: AppProps = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const bodyStyles = window.getComputedStyle(document.body);
    const fooBar = bodyStyles.getPropertyValue("--secondary");

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", fooBar);
  }, []);

  useEffect(() => {
    dispatch(realtimeActions.connection());
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      const date = new Date(Date.now());

      dispatch(
        realtimeActions.sendMessage({
          event: SocketEvent.Ping,
          data: {
            timestamp: date,
          },
        }),
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <AppLoading>
      <AppContainer children={<Outlet />} />
    </AppLoading>
  );
};
