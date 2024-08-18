import type { FC, HTMLAttributes, ReactNode } from "react";

interface GridParams extends HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;

  subHeader?: ReactNode;
  headerAfter?: ReactNode;
}

export type GridProps = FC<GridParams>;
