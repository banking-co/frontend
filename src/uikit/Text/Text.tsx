import "./Text.sass";

import { createMemo } from "solid-js";

import { Dynamic } from "solid-js/web";
import { Position } from "uikit";

import {
  IconChevronRight,
  IconCurrencyBitcoin,
  IconCurrencyDollar,
  IconDiamond,
} from "assets/icons";

import type { TextProps } from "./Text.interface";
import { TextCurrencyType } from "../../store/models";

export const Text: TextProps = (props) => {
  const formattedText = createMemo(() => {
    return props.text.replaceAll("=>", "→").replaceAll("$interpunct", "·");
  });

  const currencyIcon = {
    [TextCurrencyType.Dollar]: <IconCurrencyDollar />,
    [TextCurrencyType.Bitcoin]: <IconCurrencyBitcoin />,
    [TextCurrencyType.Donate]: <IconDiamond />,
  };

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
        [`Text__link_accent-chevron`]: props.isAccentChevron,
        ...props.classList,
      }}
      style={props.style}
      onClick={props.onClick}
    >
      <Position
        type="line"
        class={"Text__currency"}
        disableWrap={!props.isCurrency}
        gap={2}
      >
        {props.isCurrency && (
          <div class="Text__currency-icon">
            {currencyIcon[props.currencyType || TextCurrencyType.Dollar]}
          </div>
        )}
        {formattedText()}
      </Position>
      {props.isLink && (props.linkIcon || <IconChevronRight />)}
    </Dynamic>
  );
};
