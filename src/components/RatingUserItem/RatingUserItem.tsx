import "./RatingUserItem.sass";

import { useMemo } from "react";
import { useTranslation } from "i18nano";
import { useGetUser } from "hooks";
import { formatCurrency } from "utils";

import { Avatar, Position, Tag, Text, UnitName } from "uikit";

import { IconCrown, IconNumber } from "@tabler/icons-react";

import { Mode } from "models";
import type { RatingUserItemProps } from "./RatingUserItem.interface";
import classNames from "classnames";

export const RatingUserItem: RatingUserItemProps = (props) => {
  const t = useTranslation();
  const getUser = useGetUser();

  const user = useMemo(() => getUser(1), [props.uid]);
  const userAvatar = useMemo(() => {
    if (user && user.personalInfo) {
      return (
        user.personalInfo.photo100 ||
        user.personalInfo.photo200 ||
        user.personalInfo.photo50
      );
    }

    return "";
  }, [user]);

  const position = useMemo(() => {
    if (user) {
      return props.uid;
    }

    return undefined;
  }, [user]);

  const color = useMemo(() => {
    if (!position) return "";
    switch (position) {
      case 1:
        return "var(--gold)";
      case 2:
        return "var(--silver)";
      case 3:
        return "var(--bronze)";
      default:
        return "";
    }
  }, [position]);

  if (!user) {
    return null;
  }

  if (position && position >= 1 && position <= 3) {
    return (
      <Position
        className={"RatingUserItem__leader"}
        type={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {position === 1 && (
          <IconCrown color={color} fill={color} enableBackground={1} />
        )}
        <Position type={"column"} alignItems={"center"} gap={24}>
          <Position
            className={"RatingUserItem__container"}
            type={"column"}
            alignItems={"center"}
          >
            <Avatar
              src={userAvatar}
              size={position === 1 ? "large" : "medium"}
              isRounded
              rating={position}
            />
            <div
              className={classNames("RatingUserItem__leader-position", {
                [`RatingUserItem__leader-position-${position}`]: !!position,
              })}
            >
              <Text text={position.toString()} tag={"span"} isBold />
            </div>
          </Position>
          <UnitName isShortLastName user={user} maxLength={12} />
        </Position>
      </Position>
    );
  }

  return (
    <Position
      className={"RatingUserItem"}
      type={"line"}
      justifyContent={"space-between"}
      alignItems={"center"}
      stretched
    >
      <Position type={"line"} gap={12} alignItems={"center"}>
        <Avatar src={userAvatar} isSquare size={"medium"} />
        <Position type={"column"} justifyContent={"center"}>
          <UnitName user={user} />
          <Text
            text={t("user.profit", {
              profit: formatCurrency(1231513423, { symbol: "$" }),
            })}
            tag={"span"}
            isMuted
          />
        </Position>
      </Position>
      {position && (
        <Tag
          value={position.toString() || ""}
          icon={<IconNumber />}
          mode={Mode.Progress}
        />
      )}
    </Position>
  );
};
