import type { Component } from "solid-js";

interface UserCardParams {
  userId: number;
  isShort?: boolean;
  onClick?: (userId: number) => void;
}

export type UserCardProps = Component<UserCardParams>;
