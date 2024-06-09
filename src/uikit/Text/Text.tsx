import "./Text.sass";

import { createMemo } from "solid-js";

import { Dynamic } from "solid-js/web";

import { IconChevronRight } from "assets/icons";

import type { TextProps } from "./Text.interface";
import { CurrencyIcon } from "../CurrencyIcon/CurrencyIcon";

const Text: TextProps = (props) => {
  const formattedText = createMemo(() => {
    return props.text.replaceAll("=>", "→").replaceAll("$interpunct", "·");
  });

  return (
    <Dynamic
      component={props.tag}
      class="Text"
      classList={{
        Text: true,
        [`Text_tag--${props.tag}`]: true,
        [`Text--bold`]: props.isBold,
        [`Text--secondary`]: props.isSecondary,
        [`Text--muted`]: props.isMuted,
        [`Text--accent`]: props.isAccent,
        [`Text_mode--${props.mode}`]: !!props.mode,
        [`Text__link`]: props.isLink,
        [`Text_reverse`]: props.reverse,
        [`Text__currency`]: props.isCurrency && !!props.currencyType,
        [`Text__link_accent-chevron`]: props.isAccentChevron,
        ...props.classList,
      }}
      style={props.style}
      onClick={props.onClick}
    >
      {props.isCurrency && props.currencyType && (
        <CurrencyIcon currencyType={props.currencyType} />
      )}
      <span>{formattedText()}</span>
      {props.isLink && (props.linkIcon || <IconChevronRight />)}
    </Dynamic>
  );
};

export { Text };
