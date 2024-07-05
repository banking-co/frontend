import type { FC, HTMLAttributes } from "react";

interface PositionParams extends HTMLAttributes<HTMLElement> {
  type: "line" | "column";

  justifyContent?: "space-between" | "flex-start";
  alignItems?: "center" | "flex-end" | "baseline";

  gap?: number | string;
  disableWrap?: boolean;
}

export type PositionProps = FC<PositionParams>;
