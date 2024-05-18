import "./UserAvatar.sass";

import { useUser } from "hooks";

import { Avatar } from "uikit";

import type { UserAvatarProps } from "./UserAvatar.interface";

export const UserAvatar: UserAvatarProps = (props) => {
  const user = useUser(props.userId);
  const size = (props.size || 52).toString();

  return <Avatar src={user.photo} style={{ width: size, height: size }} />;
};
