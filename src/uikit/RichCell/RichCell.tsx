import "./RichCell.sass";

import { Position, Text } from "uikit";

import type { UnitNameProps } from "./RichCell.interface";

export const RichCell: UnitNameProps = (props) => {
  return (
    <Position
      onClick={props.onClick}
      type={"line"}
      justifyContent={"space-between"}
      gap={12}
      className="RichCell"
    >
      <Position type={"line"} alignItems={"center"} gap={12}>
        {props.before && <div className="RichCell--before">{props.before}</div>}
        <Position type={"column"} gap={8}>
          <Text text={props.title || ""} tag={"p"} isBold />
          <Text text={props.subtitle} tag={"span"} isMuted />
        </Position>
      </Position>
      {props.after && <div className="RichCell--after">{props.after}</div>}
    </Position>
  );
};
