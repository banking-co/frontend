import { useTranslation } from "i18nano";
import { useSelector } from "react-redux";
import { formatCurrency } from "utils";

import {
  Avatar,
  Button,
  Grid,
  Placeholder,
  Position,
  RichCell,
  Text,
} from "uikit";

import { businessSelector } from "store/business";

import type { BusinessEmploymentListProps } from "./BusinessEmploymentList.interface";
import { useMemo } from "react";
import { IconUsers } from "@tabler/icons-react";

export const BusinessEmploymentList: BusinessEmploymentListProps = () => {
  const tKey = "management.employment.page";
  const t = useTranslation();
  const { primaryBusiness, businessEmployees } = useSelector(businessSelector);

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

  if (!staffs) {
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
