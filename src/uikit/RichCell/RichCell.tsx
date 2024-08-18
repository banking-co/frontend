import "./RichCell.sass";

import { Events, Position, Text } from "uikit";

import type { UnitNameProps } from "./RichCell.interface";

export const RichCell: UnitNameProps = (props) => {
  return (
    <Events className="RichCell" type={"div"} onClick={props.onClick}>
      <Position
        onClick={props.onClick}
        type={"line"}
        justifyContent={"space-between"}
        gap={12}
      >
        <Position type={"line"} alignItems={"center"} gap={12} stretched>
          {props.before && (
            <div className="RichCell--before">{props.before}</div>
          )}
          <Position type={"column"} gap={8} stretched>
            <Position
              type="line"
              alignItems="center"
              justifyContent="space-between"
              stretched
            >
              <Text text={props.title || ""} tag={"p"} isBold />
              {props.after && (
                <div className="RichCell--after">{props.after}</div>
              )}
            </Position>
            <Text text={props.subtitle} tag={"span"} isMuted />
          </Position>
        </Position>
      </Position>
    </Events>
  );
};
