import type { Component, JSX } from "solid-js";

interface SpinnerParams extends JSX.HTMLAttributes<HTMLElement> {
  size?: "small" | "regular" | "large" | "medium" | "auto" | "inherit";
  color?: "secondary" | "lightSecondary" | "white";
}

export type SpinnerProps = Component<SpinnerParams>;
