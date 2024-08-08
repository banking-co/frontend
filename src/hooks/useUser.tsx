import type { UserModel } from "store/models";
import { useSelector } from "react-redux";
import { usersSelector } from "../store/users";

export const useUser = (userId?: number): UserModel | undefined | null => {
  const { primaryUser, users } = useSelector(usersSelector);

  if (userId) {
    return users[userId];
  }

  return primaryUser;
};
