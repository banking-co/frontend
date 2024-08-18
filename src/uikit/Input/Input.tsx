import "./Input.sass";

import classNames from "classnames";

import { Events } from "uikit";

import { InputProps } from "./Input.interface";
import { useRef, useState } from "react";
import { IconSquareRoundedX } from "@tabler/icons-react";

export const Input: InputProps = ({
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
  const ref = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(props?.defaultValue || "");

  const handleOnClick = (e: any) => {
    if (ref && ref.current) {
      ref.current.focus();
    }

    props.onClick && props.onClick(e);
  };

  const handleInputChange = (e: any) => {
    setValue((str) => {
      if (props.maxLength && props.maxLength > e.target.value.length) {
        return e.target.value;
      }

      if (!props.maxLength) {
        return e.target.value;
      }

      return str;
    });
    props.onChange && props.onChange(e.target.value);
  };

  return (
    <div
      className={classNames("Input", {
        [`Input_size--${size}`]: size,
        [`Input_type--${type}`]: type,
        [`Input--stretched`]: stretched,
        [`${className}`]: !!className,
      })}
      onClick={handleOnClick}
    >
      {icon && <div className="Input__icon">{icon}</div>}

      <input
        className={"Input__inherit"}
        placeholder={props.placeholder}
        ref={ref}
        value={value}
        onChange={handleInputChange}
      />

      <Events
        type={"div"}
        className={classNames("Input__icon", "Input__icon-remove", {
          "Input__icon-remove--hidden": !(value.toString().length >= 1),
        })}
        onClick={() => setValue("")}
      >
        <IconSquareRoundedX />
      </Events>
    </div>
  );
};
