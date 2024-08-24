import { List, Position } from "uikit";

import { items } from "./Menu.constants";

import type { MenuProps } from "./Menu.interface";

export const Menu: MenuProps = () => {
  return (
    <Position type="column" gap={24}>
      <List items={items} />
    </Position>
  );
};
