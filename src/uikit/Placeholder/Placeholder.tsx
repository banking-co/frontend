import "./Placeholder.sass";

import { Text } from "uikit";

import type { PlaceholderProps } from "./Placeholder.interface";

export const Placeholder: PlaceholderProps = (props) => {
  return (
    <div
      class="Placeholder"
      classList={{
        Placeholder__center: !!props.isCenter,
      }}
    >
      <div class="Placeholder__container">
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
