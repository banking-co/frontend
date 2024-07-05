import "./UserCard.sass";

import classNames from "classnames";

import { Text, UnitName } from "uikit";
import { UserAvatar } from "components";

import type { UserCardProps } from "./UserCard.interface";

export const UserCard: UserCardProps = (props) => {
  return (
    <div
      className="UserCard"
      onClick={() => props.onClick && props.onClick(props.userId)}
    >
      <UserAvatar size={60} userId={props.userId} />
      <div
        className={classNames({
          UserCard__info: true,
          "UserCard__info--default": true,
        })}
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
