import "./IconWrapper.sass";

import { IconWrapperProps } from "./IconWrapper.interface";

export const IconWrapper: IconWrapperProps = (props) => {
  return (
    <div class="IconWrapper" style={{ width: "28px", height: "28px" }}>
      {props.children}
    </div>
  );
};
