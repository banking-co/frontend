import type { FC } from "react";

interface UserCardParams {
  userId: number;
  isShort?: boolean;
  onClick?: (userId: number) => void;
}

export type UserCardProps = FC<UserCardParams>;
