import "./Grid.sass";

import { Position, Text } from "uikit";

import type { GridProps } from "./Grid.interface";

export const Grid: GridProps = (props) => {
  return (
    <Position type="column" stretched gap={12}>
      <Position type={"column"} stretched gap={8}>
        {props.title && (
          <Position
            type={"line"}
            className="Grid__header"
            gap={12}
            justifyContent={"space-between"}
            alignItems={"center"}
            stretched
          >
            <Text className="Grid__title" tag="h2" text={props.title} />
            {props.headerAfter}
          </Position>
        )}
        {props.subHeader && (
          <div className="Grid__subheader">{props.subHeader}</div>
        )}
      </Position>
      {props.children}
      {props.description && (
        <Text
          className="Grid__description"
          tag="span"
          text={props.description}
          isMuted
        />
      )}
    </Position>
  );
};
