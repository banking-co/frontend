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
import { Mode, UserType } from "models";

export const BusinessEmploymentRecruit: BusinessEmploymentRecruitProps = () => {
  const tKey = "management.employment.page";
  const t = useTranslation();
  const d = useDispatch();
  const navigate = useNavigate();
  const getUser = useGetUser();
  const { isLoadingBusinessStaffRecruitPage, recruitStaff } = useSelector(
    businessStaffSelector,
  );

  useEffect(() => {
    d(businessStaffActions.loadBusinessStaffRecruit());
  }, []);

  if (isLoadingBusinessStaffRecruitPage && recruitStaff.length < 1) {
    return (
      <Placeholder isCenter isFullPage>
        <Spinner />
      </Placeholder>
    );
  }

  return (
    <Grid
      title={t(`${tKey}.recruit.title`)}
      headerAfter={
        <>
          {recruitStaff.length >= 1 && (
            <Tag value={`${recruitStaff.length}`} mode={Mode.Default} />
          )}
        </>
      }
    >
      {recruitStaff.map((it) => {
        return (
          <RichCell
            key={"" + it.id + it.type + it.rarity}
            title={""}
            subtitle={""}
          />
        );
      })}
    </Grid>
  );
};
