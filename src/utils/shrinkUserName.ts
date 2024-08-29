import { UserModel } from "models";

export const shrinkUserName = (
  u: UserModel | undefined | null,
  isShortLastName?: boolean,
  maxLength?: number,
): string => {
  if (!u) return "";
  if (!u.personalInfo) return u.username;

  let str = `${u.personalInfo.firstName} ${u.personalInfo.lastName}`;
  if (isShortLastName) {
    str = `${u.personalInfo.firstName}${u.personalInfo.lastName !== "" ? ` ${u.personalInfo.lastName[0]}.` : ""}`;
  }

  if (maxLength && str.length >= maxLength) {
    return str.substring(0, maxLength);
  }

  return str;
};
