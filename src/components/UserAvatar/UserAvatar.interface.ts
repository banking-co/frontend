import type { FC, HTMLAttributes } from "react";

interface UserAvatarParams extends HTMLAttributes<HTMLElement> {
  userId: number;
  size?: number;
}

export type UserAvatarProps = FC<UserAvatarParams>;
