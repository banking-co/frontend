import "./Input.sass";

import classNames from "classnames";

import { Events, Text } from "uikit";

import { InputProps } from "./Input.interface";
import { useRef, useState } from "react";

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

  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e: any) => {
    setValue(e.target.value);
    props.onChange && props.onChange(e.target.value);
  };

  return (
    <div
      // className={classNames("Input", {})}
      style={{
        position: "relative",
        display: "inline-block",
        width: "100%",
        borderBottom: "1px solid gray",
        padding: "8px 0",
      }}
    >
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          opacity: 0,
          zIndex: 1,
        }}
      />
      <div style={{ pointerEvents: "none" }}>
        {!isFocused && !value && (
          <Text
            tag="p"
            text={props.placeholder || ""}
            style={{ color: "gray", fontSize: "16px" }}
          />
        )}
        <Text tag="p" text={value} />
      </div>
    </div>
  );
};
