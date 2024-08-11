import "./Button.sass";

import classNames from "classnames";

import { Events, Text } from "uikit";

import { ButtonProps } from "./Button.interface";

export const Button: ButtonProps = ({
  className,
  children,
  size = "regular",
  stretched = false,
  icon,
  type = "primary",
  text,
  disabled = false,
  ...props
}) => {
  return (
    <Events
      {...props}
      type={"button"}
      disabled={disabled}
      className={classNames("Button", {
        [`Button_size--${size}`]: size,
        [`Button_type--${type}`]: type,
        [`Button--stretched`]: stretched,
        [`${className}`]: !!className,
      })}
    >
      {text ? <Text text={text} tag={"p"} /> : children}
    </Events>
  );
};
