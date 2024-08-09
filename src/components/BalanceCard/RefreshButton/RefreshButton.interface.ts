import type { FC, HTMLAttributes } from "react";

interface RefreshButtonParams extends HTMLAttributes<HTMLElement> {
  handleReloadBalance: () => void;
  animateDelay: number;
}

export type RefreshButtonProps = FC<RefreshButtonParams>;
