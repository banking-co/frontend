import type { UserModel } from "store/models";

export const useUser = (_userId: number): UserModel => {
  const fullName: string = "Dmitry Maximyuk";
  const firstName: string = "Dmitry";
  const lastName: string = "Maximyuk";
  const id: string = "uid419149056";
  const photo: string = "https://placehold.co/200x200/png";
  const exp = {
    from: 1,
    to: 100,
    current: 1,
  };

  return {
    fullName,
    firstName,
    lastName,
    id,
    photo,
    exp,
  };
};
