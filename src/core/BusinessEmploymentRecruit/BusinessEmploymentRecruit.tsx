import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "i18nano";
import { formatCurrency, formatDate, shrinkUserName } from "utils";
import { useGetUser } from "hooks";

import {
  Avatar,
  Button,
  Grid,
  Placeholder,
  Position,
  RichCell,
  Spinner,
  Tag,
  Text,
} from "uikit";

import {
  businessStaffActions,
  businessStaffSelector,
} from "store/businessStaff";
import { businessSelector } from "store/business";

import { IconUsers } from "@tabler/icons-react";

import type { BusinessEmploymentRecruitProps } from "./BusinessEmploymentRecruit.interface";
import { Mode, UserType } from "store/models";

export const BusinessEmploymentRecruit: BusinessEmploymentRecruitProps = () => {
  const tKey = "management.employment.page";
  const t = useTranslation();
  const d = useDispatch();
  const navigate = useNavigate();
  const getUser = useGetUser();
  const { primaryBusinessId } = useSelector(businessSelector);
  const { isLoadingBusinessStaffPage, businessesStaff } = useSelector(
    businessStaffSelector,
  );

  const staffs = useMemo(() => {
    if (!primaryBusinessId || !businessesStaff[primaryBusinessId]) {
      return;
    }

    return businessesStaff[primaryBusinessId];
  }, [primaryBusinessId, businessesStaff]);

  useEffect(() => {
    if (primaryBusinessId) {
      d(
        businessStaffActions.loadBusinessStaff({
          businessId: primaryBusinessId,
        }),
      );
    }
  }, [primaryBusinessId]);

  if ((isLoadingBusinessStaffPage && !staffs) || !primaryBusinessId) {
    return (
      <Placeholder isCenter isFullPage>
        <Spinner />
      </Placeholder>
    );
  }

  if (staffs && staffs.length < 1) {
    return (
      <Placeholder
        icon={<IconUsers color="var(--accent)" />}
        title={t(`${tKey}.list.undefined.title`)}
        text={t(`${tKey}.list.undefined.subtitle`)}
        bottom={
          <div className="Profile__placeholder-button">
            <Button text={t(`${tKey}.list.undefined.goto`)} type="primary" />
          </div>
        }
      />
    );
  }

  return (
    <Grid
      title={t(`${tKey}.recruit.title`)}
      headerAfter={
        <>{staffs && <Tag value={`${staffs?.length}`} mode={Mode.Default} />}</>
      }
    ></Grid>
  );
};
