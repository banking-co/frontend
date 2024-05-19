import type { JSX, Component } from "solid-js";
import { Mode } from "store/models";

interface BalanceCardParams extends JSX.HTMLAttributes<HTMLElement> {
  balances: Array<{ count: number; symbol: JSX.Element }>;
  tags?: Array<{ icon: JSX.Element; text: string; mode: Mode }>;
}

export type BalanceCardProps = Component<BalanceCardParams>;
