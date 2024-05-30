import type { Component, JSX } from "solid-js";

interface PlaceholderParams extends JSX.HTMLAttributes<HTMLElement> {
  icon?: JSX.Element;
  title?: string;
  text?: string;
  description?: string;
  extra?: JSX.Element;
  isCenter?: boolean;
}

export type PlaceholderProps = Component<PlaceholderParams>;
