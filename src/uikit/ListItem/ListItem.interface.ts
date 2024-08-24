import type { FC, HTMLAttributes, ReactNode } from "react";
import { Modals } from "models";

interface ListItemParams extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  title: string;
  after?: ReactNode;
}

interface ListItemPaginationParams extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  title: string;
  disablePropagation?: boolean;
}

interface ListItemModalParams extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  title: string;
  modal: Modals;
}

export type ListItemProps = FC<ListItemParams>;
export type ListItemPaginationProps = FC<ListItemPaginationParams>;
export type ListItemSwitchProps = FC<ListItemPaginationParams>;
export type ListItemModalProps = FC<ListItemModalParams>;
