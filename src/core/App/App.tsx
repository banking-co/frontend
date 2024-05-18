import { BottomNavbar, AppContainer } from "uikit";

import { IconDots, IconHome } from "assets/icons";

import type { AppProps } from "./App.interface";

const bottomNavbarItems = [
  {
    icon: <IconHome />,
    key: "profile",
  },
  // {
  //   icon: <IconBriefcase />,
  //   key: "etc",
  // },
  {
    icon: <IconDots />,
    key: "menu",
  },
];

export const App: AppProps = (props) => {
  return (
    <>
      <AppContainer children={props.children} />
      <BottomNavbar items={bottomNavbarItems} />
    </>
  );
};
