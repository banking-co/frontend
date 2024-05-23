import type { Component, JSX } from "solid-js";

export interface IconWrapperParams extends JSX.HTMLAttributes<HTMLElement> {
  width: number;
  height: number;
}

export type IconWrapperProps = Component<IconWrapperParams>;
