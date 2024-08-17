import type { FC, HTMLAttributes, ReactNode } from "react";

interface GridParams extends HTMLAttributes<HTMLElement> {
  title?: string;
  headerAfter?: ReactNode;
  description?: string;
}

export type GridProps = FC<GridParams>;
