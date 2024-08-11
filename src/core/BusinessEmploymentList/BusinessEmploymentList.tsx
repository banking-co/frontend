import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "i18nano";
import { formatCurrency } from "utils";

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
import { realtimeActions } from "store/realtime";

import { IconUsers } from "@tabler/icons-react";

import { SocketEvent } from "store/models";
import type { BusinessEmploymentListProps } from "./BusinessEmploymentList.interface";

export const BusinessEmploymentList: BusinessEmploymentListProps = () => {
  const tKey = "management.employment.page";
  const t = useTranslation();
  const d = useDispatch();
  const { primaryBusiness, businessEmployees, isLoadingBusinessStaff } =
    useSelector(businessSelector);

  const staffs = useMemo(() => {
    if (
      !primaryBusiness ||
      !businessEmployees ||
      !businessEmployees[primaryBusiness.id]
    ) {
      return;
    }

    return businessEmployees[primaryBusiness.id];
  }, [primaryBusiness, businessEmployees]);

  useEffect(() => {
    if (primaryBusiness) {
      d(
        realtimeActions.sendMessage({
          event: SocketEvent.GetBusinessStaff,
          data: {
            businessId: primaryBusiness?.id,
          },
        }),
      );
    }
  }, [primaryBusiness]);

  if (isLoadingBusinessStaff || !primaryBusiness || !staffs) {
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
        <RichCell
          title={"Dmitry M"}
          subtitle={"bot"}
          after={
            <Text
              text={"-" + formatCurrency(105103, { symbol: "$" })}
              tag={"p"}
              isBold
            />
          }
          before={<Avatar isBot isSquare size="medium" />}
        />
      </Grid>
    </Position>
  );
};
