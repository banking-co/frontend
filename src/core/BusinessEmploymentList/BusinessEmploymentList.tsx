import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "i18nano";
import { formatCurrency, formatDate, shrinkUserName } from "utils";

import {
  Avatar,
  Button,
  Grid,
  Placeholder,
  Position,
  RichCell,
  Spinner,
  Tag,
} from "uikit";

import { businessSelector } from "store/business";

import { IconUsers } from "@tabler/icons-react";

import type { BusinessEmploymentListProps } from "./BusinessEmploymentList.interface";
import {
  businessStaffActions,
  businessStaffSelector,
} from "store/businessStaff";
import { useGetUser } from "hooks";
import { Mode, UserType } from "../../store/models";

export const BusinessEmploymentList: BusinessEmploymentListProps = () => {
  const tKey = "management.employment.page";
  const t = useTranslation();
  const d = useDispatch();
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
    <Grid title={t(`${tKey}.list.title`)}>
      <Position type="column" gap={12}>
        {staffs?.map((emp) => {
          const symbol = emp.salary >= 1 ? "-" : "";
          const mode = Mode.Destroy;
          const fmtCurrency = `${symbol}${formatCurrency(emp.salary, { symbol: "$" })}`;
          const isBot = emp.userType === UserType.Bot;
          const user = !isBot ? getUser(emp.workerID) : undefined;

          return (
            <RichCell
              title={isBot ? t("user.bot") : shrinkUserName(user)}
              subtitle={"Принят от: " + formatDate(emp.createdAt)}
              after={<Tag value={fmtCurrency} mode={mode} />}
              before={
                <Avatar
                  isBot={isBot}
                  src={user?.personalInfo?.photo200}
                  isSquare
                  size="medium"
                />
              }
            />
          );
        })}
      </Position>
    </Grid>
  );
};
