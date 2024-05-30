import "./AppContainer.sass";

import type { AppContainerProps } from "./AppContainer.interface";
import { AppHeader } from "../AppHeader/AppHeader";
import { BottomNavbar } from "../BottomNavbar/BottomNavbar";

export const AppContainer: AppContainerProps = (props) => {
  return (
    <main class="AppContainer" classList={props.classList}>
      <AppHeader withBack={false} />
      <div class="AppContainer__container">
        <div class="AppContainer__wrapper">{props.children}</div>
      </div>
      <BottomNavbar />
    </main>
  );
};
