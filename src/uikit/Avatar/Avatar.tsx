import "./Avatar.sass";

import { useState } from "react";
import classNames from "classnames";

import { IconRobot, IconUser } from "@tabler/icons-react";

import type { AvatarProps } from "./Avatar.interface";

export const Avatar: AvatarProps = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={classNames("Avatar", {
        "Avatar--bot": !!props.isBot,
        "Avatar--rounded": !!props.isRounded,
        "Avatar--square": !!props.isSquare,
        [`Avatar_size--${props.size || "regular"}`]: true,
        [`${props.className}`]: !!props.className,
      })}
      style={props.style}
    >
      {props.src && !props.isBot && !hasError && (
        <img
          src={props.src}
          alt={""}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={classNames("Avatar__image", {
            "Avatar__image--loaded": isLoaded,
          })}
        />
      )}

      {props.isBot && !props.src && <IconRobot color="var(--accent)" />}
      {hasError && <IconUser color="var(--gray)" size="50%" />}
    </div>
  );
};
