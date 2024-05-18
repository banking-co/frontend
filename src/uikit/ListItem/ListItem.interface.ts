import type { Component, JSX } from "solid-js";

interface ListItemParams extends JSX.HTMLAttributes<HTMLElement> {
  icon: JSX.Element;
  title: string;
  disablePropagation?: boolean;
}

export type ListItemProps = Component<ListItemParams>;
