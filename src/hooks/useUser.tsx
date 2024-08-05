import type { UserModel } from "store/models";
import { useSelector } from "react-redux";
import { usersSelector } from "../store/users";

export const useUser = (userId?: number): UserModel | undefined | null => {
  const { primaryUser, users } = useSelector(usersSelector);
  // const fullName: string = "Dmitry Maximyuk";
  // const firstName: string = "Dmitry";
  // const lastName: string = "Maximyuk";
  // const id: string = "uid419149056";
  // const photo: string = "https://placehold.co/200x200/png";
  // const exp = {
  //   from: 1,
  //   to: 100,
  //   current: 1,
  // };

  if (userId) {
    return users[userId];
  }

  return primaryUser;
};
