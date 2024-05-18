import "./Column.sass";

import type { ColumnProps } from "./Column.interface";

export const Column: ColumnProps = (props) => {
  return (
    <div
      class="Column"
      classList={props.classList}
      style={{
        "justify-content": props.justifyContent || "flex-start",
        "align-items": props.alignItems || "flex-start",
        "grid-gap": `${props.gap?.toString()}px`,
      }}
    >
      {props.children}
    </div>
  );
};
