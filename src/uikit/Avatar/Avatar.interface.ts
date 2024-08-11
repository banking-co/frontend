import type { FC, HTMLAttributes } from "react";

export interface AvatarParams extends HTMLAttributes<HTMLImageElement> {
  isRounded?: boolean;
  isSquare?: boolean;
  isBot?: boolean;

  src?: string;
  size?: "small" | "regular" | "large" | "medium" | "auto" | "inherit";
}

export type AvatarProps = FC<AvatarParams>;
