import type { FC, HTMLAttributes, ReactNode } from "react";

interface PlaceholderParams extends HTMLAttributes<HTMLDivElement> {
  icon?: ReactNode;
  title?: string;
  text?: string;
  description?: string;
  extra?: ReactNode;
  isCenter?: boolean;
  isFullScreen?: boolean;
  isFullPage?: boolean;
  size?: "small";
  bottom?: ReactNode;
}

export type PlaceholderProps = FC<PlaceholderParams>;
