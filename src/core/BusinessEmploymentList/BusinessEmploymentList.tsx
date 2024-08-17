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
  Text,
} from "uikit";

import { businessSelector } from "store/business";

import { IconUsers } from "@tabler/icons-react";

import type { BusinessEmploymentListProps } from "./BusinessEmploymentList.interface";
import {
  businessStaffActions,
  businessStaffSelector,
} from "store/businessStaff";
import { useGetUser } from "hooks";

export const BusinessEmploymentList: BusinessEmploymentListProps = () => {
  const tKey = "management.employment.page";
  const t = useTranslation();
  const d = useDispatch();
  const getUser = useGetUser();
  const { primaryBusiness } = useSelector(businessSelector);
  const { isLoadingBusinessStaffPage, businessesStaff } = useSelector(
    businessStaffSelector,
  );

  const staffs = useMemo(() => {
    if (
      !primaryBusiness ||
      !businessesStaff ||
      !businessesStaff[primaryBusiness.id]
    ) {
      return;
    }

    return businessesStaff[primaryBusiness.id];
  }, [primaryBusiness, businessesStaff]);

  useEffect(() => {
    if (primaryBusiness) {
      d(
        businessStaffActions.loadBusinessStaff({
          businessId: primaryBusiness.id,
        }),
      );
    }
  }, [primaryBusiness]);

  if ((isLoadingBusinessStaffPage && !staffs) || !primaryBusiness) {
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
    <Position type="column" gap={12}>
      <Grid title={t(`${tKey}.list.title`)}>
        {staffs?.map((emp) => (
          <RichCell
            title={shrinkUserName(getUser(emp.workerID))}
            subtitle={"Принят от: " + formatDate(emp.createdAt)}
            after={
              <Text
                text={"-" + formatCurrency(105103, { symbol: "$" })}
                tag={"p"}
                isBold
              />
            }
            before={<Avatar isBot isSquare size="medium" />}
          />
        ))}
      </Grid>
    </Position>
  );
};
