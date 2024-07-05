import "./IconWrapper.sass";

import { IconWrapperProps } from "./IconWrapper.interface";

export const IconWrapper: IconWrapperProps = (props) => {
  return (
    <div
      className="IconWrapper"
      style={{
        width: `${props.width || 28}px`,
        height: `${props.height || 28}px`,
      }}
    >
      {props.children}
    </div>
  );
};
