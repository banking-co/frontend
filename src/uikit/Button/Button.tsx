import "./Button.sass";

import classNames from "classnames";

import { Events, Position, Text } from "uikit";

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
  mode,
  isTextBold = false,
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
        [`Button_mode--${mode}`]: !!mode,
        [`Button--stretched`]: stretched,
        [`${className}`]: !!className,
      })}
    >
      <Position type={"line"} gap={8} alignItems={"center"}>
        {icon}
        {text ? (
          <Text text={text} tag={"p"} mode={mode} isBold={isTextBold} />
        ) : (
          children
        )}
      </Position>
    </Events>
  );
};
