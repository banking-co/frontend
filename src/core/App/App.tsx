import { AppContainer } from "uikit";

import type { AppProps } from "./App.interface";

export const App: AppProps = (props) => {
  return <AppContainer children={props.children} />;
};
