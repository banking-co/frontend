import "./Grid.sass";

import type { GridProps } from "./Grid.interface";
import { Text } from "uikit/Text/Text";

export const Grid: GridProps = (props) => {
  return (
    <div className="Grid">
      {props.title && (
        <div className="Grid__header">
          <Text className="Grid__title" tag="h2" text={props.title} />
          {props.headerAfter}
        </div>
      )}
      {props.children}
      {props.description && (
        <Text
          className="Grid__description"
          tag="span"
          text={props.description}
          isMuted
        />
      )}
    </div>
  );
};
