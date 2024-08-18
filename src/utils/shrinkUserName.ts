import { UserModel } from "models";

export const shrinkUserName = (
  u: UserModel | undefined | null,
  isShortLastName?: boolean,
): string => {
  if (!u) return "";
  if (!u.personalInfo) return u.username;

  let str = `${u.personalInfo.firstName} ${u.personalInfo.lastName}`;
  if (isShortLastName) {
    str = `${u.personalInfo.firstName}${u.personalInfo.lastName !== "" ? ` ${u.personalInfo.lastName[0]}.` : ""}`;
  }

  return str;
};
