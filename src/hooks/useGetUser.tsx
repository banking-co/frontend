import { useSelector } from "react-redux";
import { usersSelector } from "../store/users";
import { UserModel } from "../store/models";

export const useGetUser = () => {
  const { primaryUser, users } = useSelector(usersSelector);

  return (uid?: number): UserModel | undefined | null => {
    if (!uid) return primaryUser;
    return users[uid];
  };
};
