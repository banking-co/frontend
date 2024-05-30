import "./BottomNavbar.sass";

import { createSignal, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { throttle } from "lodash";

import { Position, Text } from "uikit";

import type { BottomNavbarProps } from "./BottomNavbar.interface";

import { IconDots, IconHome } from "assets/icons";

const items = [
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

export const BottomNavbar: BottomNavbarProps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = createSignal("");

  const setActiveTabFromUrl = () => {
    const pathname = location.pathname;
    const pathParts = pathname.split("/").filter(Boolean);
    const firstPart = pathParts[0];
    setActiveTab(firstPart);
  };

  onMount(setActiveTabFromUrl);

  const throttledSwitch = throttle((value) => {
    navigate(value, { replace: true });
  }, 250);

  return (
    <nav class="BottomNavbar">
      <ul class="BottomNavbar__wrapper">
        {items.map((item) => {
          return (
            <li
              class="BottomNavbar__item"
              classList={{
                BottomNavbar__item_active: activeTab() === item.key,
              }}
              onClick={() => {
                throttledSwitch(item.key);
                setActiveTab(item.key);
              }}
            >
              <Position type={"column"} gap={2} alignItems={"center"}>
                {item.icon}
                <Text text={"Test"} tag={"span"} />
              </Position>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
