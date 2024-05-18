import type { Component, JSX } from "solid-js";

interface ColumnParams extends JSX.HTMLAttributes<HTMLElement> {
  justifyContent?: "space-between" | "flex-start";
  alignItems?: "center" | "flex-end" | "baseline";
  gap?: number | string;
}

export type ColumnProps = Component<ColumnParams>;
