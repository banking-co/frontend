import "./UnitName.sass";

import { useMemo } from "react";
import { useGetUser } from "hooks";

import { Text } from "uikit";

import type { UnitNameProps } from "./UnitName.interface";
import { shrinkUserName } from "utils";

export const UnitName: UnitNameProps = (props) => {
  const getUser = useGetUser();
  const user = useMemo(
    () => props.user || getUser(props.userId),
    [props.userId],
  );
  const userLastName = useMemo(
    () => shrinkUserName(user, props.isShortLastName),
    [props.isShortLastName, user],
  );

  if (!user || !user.personalInfo) {
    return null;
  }

  return (
    <div className="UnitName">
      <Text text={userLastName} tag={props.tagName || "p"} />
      {props.visibleUserId && (
        <Text
          className="UnitName__uid"
          text={"@" + user.id.toString()}
          tag={props.tagName || "span"}
          isMuted
        />
      )}
      {props.after}
    </div>
  );
};
