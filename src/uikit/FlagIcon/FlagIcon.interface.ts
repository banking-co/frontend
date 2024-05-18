import type { Component, JSX } from "solid-js";
import { Currency } from "store/models";

interface FlagIconParams extends JSX.HTMLAttributes<HTMLImageElement> {
  currency: Currency;
}

export type FlagIconProps = Component<FlagIconParams>;
