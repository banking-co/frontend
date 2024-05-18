import "./ListItem.sass";

import { Text } from "uikit";

import { IconChevronRight } from "assets/icons";

import type { ListItemProps } from "./ListItem.interface";

export const ListItem: ListItemProps = (props) => {
  return (
    <div class="List__item" onClick={props.onClick}>
      <div class="List__item__text">
        {props.icon}
        <Text text={props.title} tag="p" />
      </div>
      {!props.disablePropagation && (
        <div class="List__item__chevron">
          <IconChevronRight
            width={14}
            height={14}
            stroke-width={4}
            color="var(--icon-color)"
          />
        </div>
      )}
    </div>
  );
};
