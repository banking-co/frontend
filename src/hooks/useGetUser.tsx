import { useSelector } from "react-redux";
import { usersSelector } from "../store/users";
import { UserModel } from "models";

export const useGetUser = () => {
  const { primaryUserId, users } = useSelector(usersSelector);

  return (uid?: number): UserModel | undefined | null => {
    if (uid) return users[uid];
    if (!uid && primaryUserId) return users[primaryUserId];
    return;
  };
};
