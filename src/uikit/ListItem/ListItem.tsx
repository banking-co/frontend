import "./ListItem.sass";

import { Text } from "uikit";

import { IconChevronRight } from "@tabler/icons-react";

import type { ListItemProps } from "./ListItem.interface";

export const ListItem: ListItemProps = (props) => {
  return (
    <div className="List__item" onClick={props.onClick}>
      <div className="List__item__text">
        {props.icon}
        <Text text={props.title} tag="p" />
      </div>
      {!props.disablePropagation && (
        <div className="List__item__chevron">
          <IconChevronRight
            width={14}
            height={14}
            strokeWidth={4}
            color="var(--icon-color)"
          />
        </div>
      )}
    </div>
  );
};
