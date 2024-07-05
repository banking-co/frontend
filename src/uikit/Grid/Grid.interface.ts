import type { FC, HTMLAttributes } from "react";

interface GridParams extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
}

export type GridProps = FC<GridParams>;
