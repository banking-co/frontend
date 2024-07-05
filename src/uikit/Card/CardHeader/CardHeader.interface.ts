import type { FC, HTMLAttributes, ReactNode } from "react";

export interface CardHeaderParams extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
  title: string;
  propagation?: "text" | "arrow";
  titleWrap?: boolean;
}

export type CardHeaderProps = FC<CardHeaderParams>;
