import type { FC, HTMLAttributes } from "react";

interface SpinnerParams extends HTMLAttributes<HTMLElement> {
  size?: "small" | "regular" | "large" | "medium" | "auto" | "inherit";
  color?: "secondary" | "lightSecondary" | "white";
}

export type SpinnerProps = FC<SpinnerParams>;
