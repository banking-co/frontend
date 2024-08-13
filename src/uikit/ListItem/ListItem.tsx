import "./ListItem.sass";

import { Text, Switch as SwitchComponent, Events } from "uikit";

import { IconChevronRight } from "@tabler/icons-react";

import type {
  ListItemPaginationProps,
  ListItemProps,
  ListItemSwitchProps,
} from "./ListItem.interface";

const Component: ListItemProps = (props) => {
  return (
    <Events type="div" className="ListItem" onClick={props.onClick}>
      <div className="ListItem__container">
        {props.icon}
        <Text text={props.title} tag="p" />
      </div>
      {props.after}
    </Events>
  );
};

const Pagination: ListItemPaginationProps = (props) => {
  return (
    <Component
      icon={props.icon}
      title={props.title}
      onClick={props.onClick}
      after={
        !props.disablePropagation && (
          <IconChevronRight
            width={14}
            height={14}
            strokeWidth={4}
            color="var(--gray)"
          />
        )
      }
    />
  );
};

const Switch: ListItemSwitchProps = (props) => {
  return (
    <Component
      icon={props.icon}
      title={props.title}
      after={<SwitchComponent />}
    />
  );
};

export const ListItem = {
  Pagination,
  Switch,
};
