import "./Events.sass";

import { createElement, useState } from "react";
import classNames from "classnames";

import type { EventsProps } from "./Events.interface";

export const Events: EventsProps = ({
  type,
  className = false,
  children,
  disabled = false,
  onClick,
  clickable = false,
  ...props
}) => {
  const animateDelay = 100;
  const isTouchSupport = window && "ontouchstart" in window;
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);

  const onStartHover = () => {
    if (!disabled && !active && !isTouchSupport) {
      setHover(true);
    }
  };

  const onEndHover = () => {
    if (!isTouchSupport) {
      setTimeout(() => {
        setHover(false);
      }, animateDelay);
    }
  };

  const onClickDelay = (e: any) => {
    if (!active && !disabled) {
      if (onClick) {
        setTimeout(() => onClick(e), animateDelay);
      }

      setActive(true);
      setTimeout(() => setActive(false), animateDelay * 2);
    }
  };

  const events = !!onClick
    ? {
        onMouseEnter: onStartHover,
        onMouseLeave: onEndHover,
        onClick: onClickDelay,
      }
    : {};

  return createElement(
    type,
    {
      className: classNames("Events", {
        "Events--disable": disabled,
        "Events--hover": hover,
        "Events--active": active,
        [`${className}`]: className,
      }),
      ...events,
      ...props,
    },
    children,
  );
};
