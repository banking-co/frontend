import type { FC, HTMLAttributes, ReactNode } from "react";

interface ListItemParams extends HTMLAttributes<HTMLElement> {
  icon: ReactNode;
  title: string;
  disablePropagation?: boolean;
}

export type ListItemProps = FC<ListItemParams>;
