import "./UnitName.sass";

import { useUser } from "hooks";

import { Text } from "uikit";

import type { UnitNameProps } from "./UnitName.interface";
import { useMemo } from "react";

export const UnitName: UnitNameProps = (props) => {
  const user = useUser(props.userId);

  const userLastName = useMemo(() => {
    if (!user || !user?.personalInfo || !user.personalInfo.lastName) {
      return "";
    }

    if (props.isShortLastName && user.personalInfo.lastName[0]) {
      return user.personalInfo.lastName[0] + ".";
    }

    return user.personalInfo.lastName;
  }, [props.isShortLastName, user]);

  if (!user || !user.personalInfo) {
    return null;
  }

  return (
    <div className="UnitName">
      <Text text={user.personalInfo.firstName} tag={props.tagName || "p"} />
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
