import type { Component, JSX } from "solid-js";

export interface ListItemModel {
  title: string;
  icon?: JSX.Element;
  to: string;
  disablePropagation?: boolean;
}

interface ListParams extends JSX.HTMLAttributes<HTMLElement> {
  items: ListItemModel[];
}

export type ListProps = Component<ListParams>;
