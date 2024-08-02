import type { FC, ReactNode } from "react";

export type ManagementProps = FC;

export interface ItemsIds {
  [key: string]: string[];
}

export interface ItemsIcons {
  [key: string]: ReactNode;
}
