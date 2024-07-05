import type { FC, HTMLAttributes, ReactNode } from "react";

export interface ListItemModel {
  title: string;
  icon?: ReactNode;
  to: string;
  disablePropagation?: boolean;
}

interface ListParams extends HTMLAttributes<HTMLElement> {
  items: ListItemModel[];
}

export type ListProps = FC<ListParams>;
