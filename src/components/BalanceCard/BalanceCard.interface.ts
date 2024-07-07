import type { FC, HTMLAttributes, ReactNode } from "react";
import { Mode } from "store/models";

interface BalanceCardParams extends HTMLAttributes<HTMLElement> {
  tags?: Array<{ icon: ReactNode; text: string; mode: Mode }>;
}

export type BalanceCardProps = FC<BalanceCardParams>;
