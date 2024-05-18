import type { Component, JSX } from "solid-js";

interface CardParams extends JSX.HTMLAttributes<HTMLElement> {
  propagation?: "arrow" | "text";
  icon?: JSX.Element;
  title: string;

  disable?: boolean;

  extra?: JSX.Element;

  isSquare?: boolean;
}

export type CardProps = Component<CardParams>;
