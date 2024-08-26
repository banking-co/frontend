import "./BottomNavbar.sass";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "i18nano";
import classNames from "classnames";

import { Position, Text } from "uikit";

import type { BottomNavbarProps } from "./BottomNavbar.interface";

import { IconBuildingBank, IconLayoutDashboard } from "@tabler/icons-react";
import { RouteId } from "models";
import { useRouter } from "hooks";
import { getRouteWithId } from "utils";

const items = [
  {
    icon: <IconBuildingBank />,
    key: RouteId.Profile,
    title: "home",
  },
  {
    icon: <IconLayoutDashboard />,
    key: RouteId.Menu,
    title: "menu",
  },
];

export const BottomNavbar: BottomNavbarProps = () => {
  const location = useLocation();
  const { goTo } = useRouter();
  const [activeTab, setActiveTab] = useState<RouteId>();
  const t = useTranslation();

  const setActiveTabFromUrl = () => {
    const pathname = location.pathname;
    for (let item of items) {
      const route = getRouteWithId(item.key);
      if (route && pathname.match(route.path || "")) {
        setActiveTab(item.key);
      }
    }
  };

  useEffect(() => {
    setActiveTabFromUrl();
  }, [location]);

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
                goTo(item.key, { replace: true });
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
