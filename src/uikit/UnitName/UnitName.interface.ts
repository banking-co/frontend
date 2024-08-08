import type { FC, ReactNode } from "react";

interface UnitNameParams {
  userId?: number;
  isBold?: boolean;
  tagName?: "h1" | "h2" | "p" | "span";
  after?: ReactNode;
  visibleUserId?: boolean;
  isShortLastName?: boolean;
}

export type UnitNameProps = FC<UnitNameParams>;
