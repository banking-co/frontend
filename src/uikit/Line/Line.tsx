import "./Line.sass";

import type { LineProps } from "./Line.interface";

export const Line: LineProps = (props) => {
  return (
    <div
      class="Line"
      classList={props.classList}
      style={{
        "justify-content": props.justifyContent || "flex-start",
        "align-items": props.alignItems || "center",
        "grid-gap": `${props.gap?.toString()}px`,
      }}
    >
      {props.children}
    </div>
  );
};
