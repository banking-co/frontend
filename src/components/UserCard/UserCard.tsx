import "./UserCard.sass";

import { Text, UnitName } from "uikit";
import { UserAvatar } from "../UserAvatar/UserAvatar";

import type { UserCardProps } from "./UserCard.interface";

export const UserCard: UserCardProps = (props) => {
  return (
    <div
      class="UserCard"
      onClick={() => props.onClick && props.onClick(props.userId)}
    >
      <UserAvatar size={60} userId={props.userId} />
      <div
        class="UserCard__info"
        classList={{
          "UserCard__info--default": true,
        }}
      >
        <UnitName userId={props.userId} isBold visibleUserId />
        <Text
          text="user.card.subtitle"
          values={{ level: "1", exp: "0 / 100 exp" }}
          tag="p"
          isMuted
        />
      </div>
    </div>
  );
};
