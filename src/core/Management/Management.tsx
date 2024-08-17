import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "i18nano";
import { useGetUser } from "hooks";

import { Grid, List, Placeholder, Position, Spinner } from "uikit";

import { itemsIds, itemsIcons } from "./Management.constants";

import type { ManagementProps } from "./Management.interface";
import { businessActions, businessSelector } from "store/business";

export const Management: ManagementProps = () => {
  const t = useTranslation();
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
      {Object.keys(itemsIds).map((key) => (
        <Grid
          key={key}
          title={t(`management.${key}.title`)}
          description={t(`management.${key}.description`)}
        >
          <List
            items={itemsIds[key].map((subKey) => ({
              type: "pagination",
              icon: itemsIcons[subKey],
              title:
                key === "bank" && subKey === "info" && primaryBusiness?.name
                  ? primaryBusiness.name
                  : t(`management.${key}.${subKey}`),
              to: `/management/${key}/${subKey}`,
            }))}
          />
        </Grid>
      ))}
    </Position>
  );
};
