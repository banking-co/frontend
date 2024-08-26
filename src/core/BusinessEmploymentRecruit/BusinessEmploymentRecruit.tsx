import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "i18nano";
import { formatCurrency, formatDate } from "utils";

import {
  Avatar,
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

import { IconSearch } from "@tabler/icons-react";

import { Modals, Mode } from "models";
import type { BusinessEmploymentRecruitProps } from "./BusinessEmploymentRecruit.interface";
import { useModal } from "hooks";

export const BusinessEmploymentRecruit: BusinessEmploymentRecruitProps = () => {
  const tKey = "management.employment.page.recruit";
  const t = useTranslation();
  const d = useDispatch();
  const { isLoadingBusinessStaffRecruitPage, recruitStaff } = useSelector(
    businessStaffSelector,
  );
  const { openModal } = useModal();

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
          <Input
            icon={<IconSearch />}
            placeholder={t(`${tKey}.search`)}
            maxLength={30}
            stretched
          />
        </>
      }
    >
      <Position type="column" stretched gap={12}>
        {recruitStaff?.map((it) => {
          const fmtCurrency = formatCurrency(it.cost, { symbol: "$" });
          const isBot = it.name.toLowerCase().includes("bot");

          return (
            <RichCell
              key={"" + it.id + it.rarity + it.type}
              onClick={
                () => {}
                // isBot
                //   ? undefined
                //   : () => {
                //       openModal(Modals.UserProfile, {
                //         state: { uid: it.id },
                //       });
                //     }
              }
              title={isBot ? t("user.bot") : it.name}
              subtitle={t("item.created_at", {
                date: formatDate(it.createdAt),
              })}
              after={
                <Text text={fmtCurrency} tag={"span"} mode={Mode.Progress} />
              }
              before={<Avatar isBot={isBot} src="" isSquare size="medium" />}
            />
          );
        })}
      </Position>
    </Grid>
  );
};
