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

import type { BusinessEmploymentListProps } from "./BusinessEmploymentList.interface";
import { Mode, UserType } from "models";

export const BusinessEmploymentList: BusinessEmploymentListProps = () => {
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
      title={t(`${tKey}.list.title`)}
      headerAfter={
        <>{staffs && <Tag value={`${staffs?.length}`} mode={Mode.Default} />}</>
      }
    >
      <Position type="column" stretched gap={12}>
        {staffs?.map((emp) => {
          const symbol = emp.salary >= 1 ? "-" : "";
          const mode = Mode.Destroy;
          const fmtCurrency = `${symbol}${formatCurrency(emp.salary, { symbol: "$" })}`;
          const isBot = emp.userType === UserType.Bot;
          const user = !isBot ? getUser(emp.workerID) : undefined;

          return (
            <RichCell
              key={"" + emp.id + emp.workerID + emp.userType}
              onClick={() => {}}
              title={isBot ? t("user.bot") : shrinkUserName(user)}
              subtitle={t("user.invited_at", {
                date: formatDate(emp.createdAt),
              })}
              after={<Text tag={"span"} text={fmtCurrency} mode={mode} />}
              before={
                <Avatar
                  isBot={isBot}
                  src={
                    user?.personalInfo?.photo100 ||
                    user?.personalInfo?.photo200 ||
                    ""
                  }
                  isSquare
                  size="medium"
                />
              }
            />
          );
        })}
        <Position
          type="line"
          justifyContent="center"
          stretched
          style={{ padding: "12px 0" }}
        >
          <Button
            type="secondary"
            onClick={() =>
              navigate("/management/employment/recruit", { replace: true })
            }
          >
            <Text text={t("user.invite_more")} tag={"p"} isMuted />
          </Button>
        </Position>
      </Position>
    </Grid>
  );
};
