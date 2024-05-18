import type { Component, JSX } from "solid-js";

interface UserAvatarParams extends JSX.HTMLAttributes<HTMLElement> {
  userId: number;
  size?: number;
}

export type UserAvatarProps = Component<UserAvatarParams>;
