import "./Tag.sass";

import classNames from "classnames";

import { Text } from "uikit";

import { TagProps } from "./Tag.interface";

export const Tag: TagProps = (props) => {
  return (
    <div
      className={classNames({
        Tag: true,
        [`Tag_mode--${props.mode}`]: true,
        [`Tag_center`]: !!props?.isCenter,
      })}
    >
      {props.icon && <div className="Tag__icons">{props.icon}</div>}
      <Text text={props.value} tag={"span"} mode={props.mode} />
    </div>
  );
};
