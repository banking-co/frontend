import { useUser } from "hooks";

import { calculatePercentageInRange } from "utils";

import type { UserLevelModel } from "store/models";

export const useUserLevel = (userId: number): UserLevelModel => {
  const {
    exp: { from, to, current },
  } = useUser(userId);

  const level: number = 1;
  const percentage: string =
    calculatePercentageInRange(from, to, current) + "%";

  return {
    exp: {
      from,
      to,
      current,
    },
    level,
    percentage,
  };
};
