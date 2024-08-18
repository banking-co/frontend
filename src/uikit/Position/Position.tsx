import "./Position.sass";

import { useMemo } from "react";
import classNames from "classnames";

import { PositionProps } from "./Position.interface";
import { Events } from "../Events/Events";

const getDefaultStyles = ({
  justifyContent,
  alignItems,
  gap,
}: {
  justifyContent?: string;
  alignItems?: string;
  gap?: number | string;
}) => ({
  justifyContent: justifyContent || "flex-start",
  alignItems: alignItems || "flex-start",
  gap: `${gap || 0}px`,
});

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
    <Events
      type="div"
      onClick={props.onClick}
      className={classNames({
        [componentClassName]: !!componentClassName,
        [`${props.className}`]: !!props.className,
      })}
      style={Object.assign(getDefaultStyles(props), props.style)}
    >
      {props.children}
    </Events>
  );
};
