import type { FC, HTMLAttributes, ReactNode } from "react";

import { Mode } from "models";

type TextTags = "h1" | "h2" | "h3" | "p" | "span";

interface TextParams extends HTMLAttributes<HTMLElement> {
  text: string;
  values?: any;

  tag: TextTags;
  mode?: Mode;
  linkIcon?: ReactNode;
  reverse?: boolean;

  isBold?: boolean;
  isSecondary?: boolean;
  isMuted?: boolean;
  isAccent?: boolean;
  isAccentChevron?: boolean;
  isLink?: boolean;
}

export type TextProps = FC<TextParams>;
