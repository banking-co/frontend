import "./Position.sass";

import { useMemo } from "react";
import classNames from "classnames";

import { getDefaultStyles } from "./Position.constants";

import { PositionProps } from "./Position.interface";

export const Position: PositionProps = (props) => {
  if (props.disableWrap) {
    return <>{props.children}</>;
  }

  const componentClassName = useMemo(() => {
    switch (props.type) {
      case "line":
        return "Line";
      case "column":
        return "Column";
    }
  }, [props.type]);

  return (
    <div
      className={classNames({
        [componentClassName]: !!componentClassName,
        [`${props.className}`]: !!props.className,
      })}
      style={Object.assign(getDefaultStyles(props), props.style)}
    >
      {props.children}
    </div>
  );
};
