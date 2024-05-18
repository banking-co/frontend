import "./BottomNavbar.sass";

import { createSignal, onMount } from "solid-js";
import { useLocation, useNavigate } from "@solidjs/router";
import { throttle } from "lodash";

import { Ripple } from "uikit";

import type { BottomNavbarProps } from "./BottomNavbar.interface";

export const BottomNavbar: BottomNavbarProps = (props) => {
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
        {props.items.map((item) => {
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
              {item.icon}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
