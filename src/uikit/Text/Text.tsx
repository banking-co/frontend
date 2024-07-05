import "./Text.sass";

import { createElement, useMemo } from "react";
import classNames from "classnames";

import { CurrencyIcon } from "uikit";

import { IconChevronRight } from "@tabler/icons-react";

import type { TextProps } from "./Text.interface";

const Text: TextProps = (props) => {
  const formattedText = useMemo(() => {
    return props.text.replaceAll("=>", "→").replaceAll("$interpunct", "·");
  }, [props.text]);

  return createElement(
    props.tag,
    {
      className: classNames({
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
        [`${props.className}`]: !!props.className,
      }),
      style: props.style,
      onClick: props.onClick,
    },
    <>
      {props.isCurrency && props.currencyType && (
        <CurrencyIcon currencyType={props.currencyType} />
      )}
      <span>{formattedText}</span>
      {props.isLink && (props.linkIcon || <IconChevronRight />)}
    </>,
  );
};

export { Text };
