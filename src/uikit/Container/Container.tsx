import "./Container.sass";

import { ContainerProps } from "./Container.interface";
import classNames from "classnames";

export const Container: ContainerProps = (props) => {
  return (
    <div
      className={classNames({
        Container: true,
        "Container--default": !!props.isDefault,
        [`${props.className}`]: !!props.className,
      })}
    >
      {props.children}
    </div>
  );
};
