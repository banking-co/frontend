import type { FC, ReactNode } from "react";
import { UserModel } from "models";

interface UnitNameParams {
  userId?: number;
  isBold?: boolean;
  tagName?: "h1" | "h2" | "p" | "span";
  after?: ReactNode;
  visibleUserId?: boolean;
  isShortLastName?: boolean;
  user?: UserModel;
}

export type UnitNameProps = FC<UnitNameParams>;
