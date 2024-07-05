import "./Placeholder.sass";

import { Text } from "uikit";

import type { PlaceholderProps } from "./Placeholder.interface";
import classNames from "classnames";

export const Placeholder: PlaceholderProps = (props) => {
  return (
    <div
      className={classNames({
        Placeholder: true,
        Placeholder__center: !!props.isCenter,
        Placeholder__fullscreen: !!props.isFullScreen,
        [`${props.className}`]: props.className,
      })}
    >
      <div className="Placeholder__container">
        {props.title && <Text text={props.title} tag="h1" isAccent isBold />}
        {props.text && <Text text={props.text} tag="p" isSecondary />}
        {props.description && (
          <Text text={props.description as string} tag="span" isMuted />
        )}
        {props.children}
      </div>
    </div>
  );
};
