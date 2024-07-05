import type { FC, HTMLAttributes } from "react";

export interface AvatarParams extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

export type AvatarProps = FC<AvatarParams>;
