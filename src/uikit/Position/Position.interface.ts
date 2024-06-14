import type { Component, JSX } from "solid-js";

interface PositionParams extends JSX.HTMLAttributes<HTMLElement> {
  type: "line" | "column";

  justifyContent?: "space-between" | "flex-start" | "center";
  alignItems?: "center" | "flex-end" | "baseline";

  gap?: number | string;
  disableWrap?: boolean;
}

export type PositionProps = Component<PositionParams>;
