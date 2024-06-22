import type { Component, JSX } from "solid-js";

interface GridParams extends JSX.HTMLAttributes<HTMLElement> {
  title?: string;
  description?: string;
}

export type GridProps = Component<GridParams>;
