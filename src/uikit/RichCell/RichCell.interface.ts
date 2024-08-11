import type { FC, HTMLAttributes, ReactNode } from "react";

interface RichCellParams extends HTMLAttributes<HTMLElement> {
  after?: ReactNode;
  before?: ReactNode;
  bottom?: ReactNode;
  title: string;
  subtitle: string;
}

export type UnitNameProps = FC<RichCellParams>;
