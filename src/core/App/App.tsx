import { AppContainer } from "uikit";

import { AppLoading } from "../AppLoading/AppLoading";
import { Outlet } from "react-router-dom";

import type { AppProps } from "./App.interface";

export const App: AppProps = (props) => {
  return (
    <AppLoading>
      <AppContainer children={<Outlet />} />
    </AppLoading>
  );
};
