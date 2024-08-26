import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUser } from "hooks";

import { List, Placeholder, Position, Spinner } from "uikit";

import type { BusinessRatingProps } from "./BusinessRating.interface";
import { businessActions, businessSelector } from "store/business";

export const BusinessRating: BusinessRatingProps = () => {
  return (
    <Position type="column" gap={24}>
      {/*<List items={items} />*/}
    </Position>
  );
};
