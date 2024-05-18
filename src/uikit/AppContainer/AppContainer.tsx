import "./AppContainer.sass";

import type { AppContainerProps } from "./AppContainer.interface";
import { AppHeader } from "../AppHeader/AppHeader";

export const AppContainer: AppContainerProps = (props) => {
  return (
    <>
      <AppHeader withBack />
      <main class="AppContainer" classList={props.classList}>
        <div class="AppContainer__wrapper">{props.children}</div>
      </main>
    </>
  );
};
