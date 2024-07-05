import type { FC, HTMLAttributes, ReactNode } from "react";

interface CardParams extends HTMLAttributes<HTMLElement> {
  propagation?: "arrow" | "text";
  icon?: ReactNode;
  title: string;

  disable?: boolean;
  extra?: ReactNode;

  isSquare?: boolean;
  titleWrap?: boolean;
}

export type CardProps = FC<CardParams>;
