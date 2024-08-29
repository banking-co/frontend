import { FC, HTMLAttributes } from "react";

interface PositionParams extends HTMLAttributes<HTMLElement> {
  type: "line" | "column";

  justifyContent?: "space-between" | "center" | "flex-start" | "space-evenly";
  alignItems?: "center" | "flex-end" | "baseline";

  gap?: number | string;
  disableWrap?: boolean;
  stretched?: boolean;
}

export type PositionProps = FC<PositionParams>;
