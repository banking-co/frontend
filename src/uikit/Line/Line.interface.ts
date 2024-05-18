import type { Component, JSX } from "solid-js";

interface LineParams extends JSX.HTMLAttributes<HTMLDivElement> {
  justifyContent?: "space-between" | "flex-start";
  alignItems?: "center" | "flex-end" | "baseline";
  gap?: number | string;
}

export type LineProps = Component<LineParams>;
