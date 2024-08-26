import "./AppUserFootnote.sass";

import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useGetUser, useModal } from "hooks";

import { Avatar, Events } from "uikit";

import { usersSelector } from "store/users";

import type { AppUserFootnoteProps } from "./AppUserFootnote.interface";
import { Modals } from "models";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

export const AppUserFootnote: AppUserFootnoteProps = () => {
  const getUser = useGetUser();
  const { primaryUserId } = useSelector(usersSelector);
  const { openModal } = useModal();
  const location = useLocation();

  const user = useMemo(() => getUser(), [primaryUserId]);

  if (!user || (location.pathname !== "/" && location.pathname !== "/menu")) {
    return null;
  }

  if (location) {
  }

  return (
    <Events
      type={"div"}
      className={classNames("AppUserFootnote", "AppUserFootnote__user")}
      onClick={() =>
        openModal(Modals.UserProfile, {
          state: {
            uid: primaryUserId,
          },
        })
      }
    >
      <Avatar
        src={
          user.personalInfo?.photo50 ||
          user.personalInfo?.photo100 ||
          user.personalInfo?.photo200
        }
        isSquare
      />

      <div className={"AppUserFootnote__badge"} />
    </Events>
  );
};
