import "./FlagIcon.sass";

import { getCountryFlag } from "utils";

import type { FlagIconProps } from "./FlagIcon.interface";

export const FlagIcon: FlagIconProps = (props) => {
  return (
    <div class="FlagIcon" classList={props.classList} style={props.style}>
      {getCountryFlag(props.currency)}
    </div>
  );
};
