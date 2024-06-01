import { AppContainer, ModalProvider } from "uikit";

import type { AppProps } from "./App.interface";
import { AppLoading } from "../AppLoading/AppLoading";

export const App: AppProps = (props) => {
  return (
    <AppLoading>
      <AppContainer children={props.children} />
      <ModalProvider />
    </AppLoading>
  );
};
