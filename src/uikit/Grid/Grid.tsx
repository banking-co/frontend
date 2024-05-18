import "./Grid.sass";

import type { GridProps } from "./Grid.interface";

export const Grid: GridProps = (props) => {
  return <div class="Grid">{props.children}</div>;
};
