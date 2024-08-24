import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetUser } from "hooks";

import { List, Placeholder, Position, Spinner } from "uikit";

import { items } from "./Management.constants";

import type { ManagementProps } from "./Management.interface";
import { businessActions, businessSelector } from "store/business";

export const Management: ManagementProps = () => {
  const dispatch = useDispatch();
  const getUser = useGetUser();
  const { isLoadingPrimaryBusiness, primaryBusinessId, businesses } =
    useSelector(businessSelector);

  const user = useMemo(() => getUser(), []);
  const primaryBusiness = useMemo(
    () => (primaryBusinessId ? businesses[primaryBusinessId] : undefined),
    [primaryBusinessId, businesses],
  );

  useEffect(() => {
    if (user) {
      dispatch(
        businessActions.loadPrimaryBusiness({
          userId: user.id,
        }),
      );
    }
  }, [user]);

  if (isLoadingPrimaryBusiness && !primaryBusiness) {
    return (
      <Placeholder isFullPage isCenter>
        <Spinner />
      </Placeholder>
    );
  }

  return (
    <Position type="column" gap={24}>
      <List items={items} />
    </Position>
  );
};
