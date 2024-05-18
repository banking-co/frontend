import "./Container.sass";

import { ContainerProps } from "./Container.interface";

export const Container: ContainerProps = (props) => {
  return (
    <div
      class="Container"
      classList={{
        "Container--default": !!props.isDefault,
        ...props.classList,
      }}
    >
      {props.children}
    </div>
  );
};
