import "./BottomNavbar.sass";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { throttle } from "lodash";
import { useTranslation } from "i18nano";
import classNames from "classnames";

import { Position, Text } from "uikit";

import type { BottomNavbarProps } from "./BottomNavbar.interface";

import { IconDots, IconHome } from "@tabler/icons-react";

const items = [
  {
    icon: <IconHome />,
    key: "/",
    title: "home",
  },
  {
    icon: <IconDots />,
    key: "/menu",
    title: "menu",
  },
];

export const BottomNavbar: BottomNavbarProps = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("");
  const t = useTranslation();

  const setActiveTabFromUrl = () => {
    const pathname = location.pathname;
    if (pathname.length <= 1) {
      return setActiveTab("/");
    }

    for (let item of items) {
      if (pathname.match(item.key)) {
        return setActiveTab(item.key);
      }
    }
  };

  useEffect(() => {
    setActiveTabFromUrl();
  }, []);

  const throttledSwitch = throttle((value) => {
    navigate(value, { replace: true });
  }, 250);

  return (
    <nav className="BottomNavbar">
      <ul className="BottomNavbar__wrapper">
        {items.map((item) => {
          return (
            <li
              key={`bottom-navbar-item-${item.key}-${item.title}`}
              className={classNames("BottomNavbar__item", {
                BottomNavbar__item_active: activeTab === item.key,
              })}
              onClick={() => {
                throttledSwitch(item.key);
                setActiveTab(item.key);
              }}
            >
              <Position type={"column"} gap={2} alignItems={"center"}>
                {item.icon}
                <Text
                  text={t(`navigation.${item.title}`) || ""}
                  tag={"span"}
                  isAccent={activeTab === item.key}
                  isMuted={!(activeTab === item.key)}
                />
              </Position>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
