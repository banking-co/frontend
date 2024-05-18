import type { Component, JSX } from "solid-js";

export interface CardHeaderParams extends JSX.HTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  title: string;
  propagation?: "text" | "arrow";
}

export type CardHeaderProps = Component<CardHeaderParams>;
