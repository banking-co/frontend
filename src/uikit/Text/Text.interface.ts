import type { JSX, Component } from "solid-js";

import { Mode } from "store/models";

type TextTags = "h1" | "h2" | "h3" | "p" | "span";

interface TextParams extends JSX.HTMLAttributes<HTMLElement> {
  text: string;
  tag: TextTags;
  values?: any;

  isBold?: boolean;
  isSecondary?: boolean;
  isMuted?: boolean;
  isAccent?: boolean;
  isLink?: boolean;
  isAccentChevron?: boolean;

  linkIcon?: JSX.Element;

  reverse?: boolean;

  mode?: Mode;
}

export type TextProps = Component<TextParams>;
