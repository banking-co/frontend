import "./UsersProfile.sass";

import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useGetUser } from "hooks";

import { Avatar, Position, UnitIdentifier, UnitName } from "uikit";

import type { UsersProfileProps } from "./UsersProfile.interface";

export const UsersProfile: UsersProfileProps = () => {
  const { id } = useParams();
  const getUser = useGetUser();

  const user = useMemo(() => (id ? getUser(parseInt(id)) : undefined), []);

  if (!user) {
    return null;
  }

  return (
    <>
      <Position type={"line"} gap={12} alignItems={"center"}>
        <Avatar
          src={user.personalInfo?.photo100 || user.personalInfo?.photo200}
          size={"medium"}
          isSquare
        />
        <div>
          <UnitName user={user} tagName={"p"} />
          <UnitIdentifier user={user} tagName={"span"} />
        </div>
      </Position>
      <div></div>
    </>
  );
};
