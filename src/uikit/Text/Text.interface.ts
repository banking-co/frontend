import type { JSX, Component } from "solid-js";

import { Mode, TextCurrencyType } from "store/models";

type TextTags = "h1" | "h2" | "h3" | "p" | "span";

interface TextParams extends JSX.HTMLAttributes<HTMLElement> {
  text: string;
  values?: any;

  tag: TextTags;
  mode?: Mode;
  linkIcon?: JSX.Element;
  reverse?: boolean;
  currencyType?: TextCurrencyType;

  isBold?: boolean;
  isSecondary?: boolean;
  isMuted?: boolean;
  isAccent?: boolean;
  isAccentChevron?: boolean;
  isLink?: boolean;
  isCurrency?: boolean;
}

export type TextProps = Component<TextParams>;
