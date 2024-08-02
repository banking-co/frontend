import "./ListItem.sass";

import { Text } from "uikit";

import { IconChevronRight } from "@tabler/icons-react";

import type { ListItemProps } from "./ListItem.interface";

export const ListItem: ListItemProps = (props) => {
  return (
    <div className="ListItem" onClick={props.onClick}>
      <div className="ListItem__container">
        {props.icon}
        <Text text={props.title} tag="p" />
      </div>
      {!props.disablePropagation && (
        <IconChevronRight
          width={14}
          height={14}
          strokeWidth={4}
          color="var(--gray)"
        />
      )}
    </div>
  );
};
