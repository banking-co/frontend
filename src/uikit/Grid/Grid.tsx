import "./Grid.sass";

import type { GridProps } from "./Grid.interface";
import { Text } from "uikit/Text/Text";

export const Grid: GridProps = (props) => {
  return (
    <div className="Grid">
      {props.title && <Text tag="h2" text={props.title} />}
      {props.children}
      {props.description && (
        <Text tag="span" text={props.description} isMuted />
      )}
    </div>
  );
};
