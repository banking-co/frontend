import type { FC, HTMLAttributes, ReactNode } from "react";

interface ListItemsDefaultProps {
  title: string;
  icon?: ReactNode;
}

export interface ListItemPagination extends ListItemsDefaultProps {
  type: "pagination";
  title: string;
  to: string;
  disablePropagation?: boolean;
}

export interface ListItemSwitch extends ListItemsDefaultProps {
  type: "switch";
  onChange: (value: boolean) => void;
}

export type ListItemsType = Array<ListItemPagination | ListItemSwitch>;

interface ListParams extends HTMLAttributes<HTMLElement> {
  items: ListItemsType;
}

export type ListProps = FC<ListParams>;
