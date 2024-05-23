import "./Position.sass";

import { getDefaultStyles } from "./Position.constants";

import { PositionProps } from "./Position.interface";
import { createMemo } from "solid-js";

export const Position: PositionProps = (props) => {
  if (props.disableWrap) {
    return <>{props.children}</>;
  }

  const componentClassName = createMemo(() => {
    switch (props.type) {
      case "line":
        return "Line";
      case "column":
        return "Column";
    }
  });

  return (
    <div
      class={componentClassName()}
      classList={{ [`${props.class}`]: !!props.class, ...props.classList }}
      style={Object.assign(getDefaultStyles(props), props.style)}
    >
      {props.children}
    </div>
  );
};
