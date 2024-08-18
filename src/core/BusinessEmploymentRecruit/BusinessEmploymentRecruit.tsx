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
  Input,
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
  const tKey = "management.employment.page.recruit";
  const t = useTranslation();
  const d = useDispatch();
  const navigate = useNavigate();
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
      title={t(`${tKey}.title`)}
      headerAfter={
        <>
          {recruitStaff.length >= 1 && (
            <Tag value={`${recruitStaff?.length}`} mode={Mode.Default} />
          )}
        </>
      }
      subHeader={
        <>
          <Input placeholder={"12312312312"} stretched />
        </>
      }
    >
      <Position type="column" gap={12}>
        {recruitStaff?.map((it) => {
          const mode = Mode.Progress;
          const fmtCurrency = formatCurrency(it.cost, { symbol: "$" });
          const isBot = it.name.toLowerCase().includes("bot");

          return (
            <RichCell
              key={"" + it.id + it.rarity + it.type}
              onClick={() => {}}
              title={isBot ? t("user.bot") : it.name}
              subtitle={t("item.created_at", {
                date: formatDate(it.createdAt),
              })}
              after={<Tag value={fmtCurrency} mode={mode} />}
              before={<></>}
            />
          );
        })}
        <Position
          type="line"
          justifyContent="center"
          style={{ width: "100%", padding: "12px 0" }}
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
