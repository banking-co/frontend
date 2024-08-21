import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Outlet } from "react-router-dom";
import { ModalProvider } from "modals";
import { AppContainer } from "uikit";
import { AppLoading } from "../AppLoading/AppLoading";

import { realtimeActions } from "store/realtime";

import type { AppProps } from "./App.interface";

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

  return (
    <AppLoading>
      <AppContainer children={<Outlet />} />
      <ModalProvider />
    </AppLoading>
  );
};
