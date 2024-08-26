import "./ListItem.sass";

import { useModal } from "hooks";

import { Text, Switch as SwitchComponent, Events } from "uikit";

import { IconChevronRight, IconPencil } from "@tabler/icons-react";

import type {
  ListItemModalProps,
  ListItemPaginationProps,
  ListItemProps,
  ListItemSwitchProps,
} from "./ListItem.interface";

const defaultIconColor = "var(--gray)";

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
        <IconChevronRight size={14} strokeWidth={4} color={defaultIconColor} />
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

const Modal: ListItemModalProps = (props) => {
  const { openModal } = useModal();

  return (
    <Component
      icon={props.icon}
      title={props.title}
      after={
        <IconChevronRight
          width={14}
          height={14}
          strokeWidth={4}
          color={defaultIconColor}
        />
      }
      onClick={() => openModal(props.modal)}
    />
  );
};

const Edit: ListItemModalProps = (props) => {
  const { openModal } = useModal();

  return (
    <Component
      icon={props.icon}
      title={props.title}
      after={<IconPencil size={18} strokeWidth={2} color={defaultIconColor} />}
      onClick={() => openModal(props.modal)}
    />
  );
};

export const ListItem = {
  Pagination,
  Switch,
  Modal,
  Edit,
};
