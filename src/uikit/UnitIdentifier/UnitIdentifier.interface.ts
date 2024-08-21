import type { FC } from "react";
import { UserModel } from "models";

interface UnitIdentifierParams {
  userId?: number;
  user?: UserModel;
  tagName?: "h1" | "h2" | "h3" | "p" | "span";
}

export type UnitIdentifierProps = FC<UnitIdentifierParams>;
