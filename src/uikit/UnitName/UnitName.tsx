import "./UnitName.sass";

import { useUser } from "hooks";

import { Text } from "uikit";

import type { UnitNameProps } from "./UnitName.interface";
import { useMemo } from "react";

export const UnitName: UnitNameProps = (props) => {
  const user = useUser(props.userId);

  const userLastName = useMemo(() => {
    if (!user || !user?.vkData) {
      return "";
    }

    if (props.isShortLastName) {
      return user.vkData?.lastName[0] + ".";
    }

    return user.vkData.lastName;
  }, [props.isShortLastName, user]);

  if (!user || !user.vkData) {
    return null;
  }

  return (
    <div className="UnitName">
      <Text text={user.vkData.firstName} tag={props.tagName || "p"} />
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
