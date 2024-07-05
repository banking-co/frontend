import type { FC, HTMLAttributes } from "react";

export interface IconWrapperParams extends HTMLAttributes<HTMLElement> {
  width: number;
  height: number;
}

export type IconWrapperProps = FC<IconWrapperParams>;
