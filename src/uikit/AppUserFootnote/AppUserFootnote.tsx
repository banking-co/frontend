import "./AppUserFootnote.sass";

import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useGetUser } from "hooks";

import { Avatar, UnitName } from "uikit";

import { usersSelector } from "store/users";

import type { AppUserFootnoteProps } from "./AppUserFootnote.interface";

export const AppUserFootnote: AppUserFootnoteProps = () => {
  const getUser = useGetUser();
  const { primaryUserId } = useSelector(usersSelector);

  const user = useMemo(() => getUser(), [primaryUserId]);

  if (!user) {
    return null;
  }

  return (
    <div className="AppUserFootnote__user">
      <Avatar src={user.personalInfo?.photo200} isSquare />
      <UnitName isShortLastName />
    </div>
  );
};
