import type { Component, JSX } from "solid-js";

export interface AvatarParams extends JSX.HTMLAttributes<HTMLImageElement> {
  src: string;
}

export type AvatarProps = Component<AvatarParams>;
