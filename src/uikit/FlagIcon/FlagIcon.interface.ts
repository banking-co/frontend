import type { FC, HTMLAttributes } from "react";
import { Currency } from "models";

interface FlagIconParams extends HTMLAttributes<HTMLImageElement> {
  currency: Currency;
}

export type FlagIconProps = FC<FlagIconParams>;
