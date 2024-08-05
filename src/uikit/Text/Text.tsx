import "./Text.sass";

import classNames from "classnames";
import { createElement, useMemo } from "react";
import { debounce } from "lodash";

import { IconChevronRight } from "@tabler/icons-react";

import type { TextProps } from "./Text.interface";

const Text: TextProps = (props) => {
  const formattedText = useMemo(() => {
    return props.text.replaceAll("=>", "→").replaceAll("$interpunct", "·");
  }, [props.text]);

  return (
    <div>
      {createElement(
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
            [`Text__link_accent-chevron`]: props.isAccentChevron,
            [`${props.className}`]: !!props.className,
          }),
          style: props.style,
          onClick: debounce(
            (e) => (props.onClick ? props.onClick(e) : undefined),
            200,
          ),
        },
        <>
          {formattedText}
          {props.isLink && (props.linkIcon || <IconChevronRight />)}
        </>,
      )}
    </div>
  );
};

export { Text };
