import "./FlagIcon.sass";

import classNames from "classnames";

import { getCountryFlag } from "utils";

import type { FlagIconProps } from "./FlagIcon.interface";

export const FlagIcon: FlagIconProps = (props) => {
  return (
    <div
      className={classNames({
        FlagIcon: true,
        [`${props.className}`]: !!props.className,
      })}
      style={props.style}
    >
      <img src={getCountryFlag(props.currency)} alt="" />
    </div>
  );
};
