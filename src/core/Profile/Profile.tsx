import "./Profile.sass";

import { useTranslation } from "i18nano";
import { calculatingRating, formatCurrency } from "utils";

import { Card, PercentageVisualization, Position, Tag, Text } from "uikit";
import { BalanceCard, CurrencyExchangeRate } from "components";

import {
  IconArrowBigDown,
  IconGift,
  IconArrowsExchange,
  IconReload,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Mode } from "store/models";
import type { ProfileProps } from "./Profile.interface";
import * as process from "node:process";

export const Profile: ProfileProps = () => {
  const t = useTranslation();
  const isDisable = false;

  return (
    <>
      <BalanceCard
        tags={[
          {
            icon: <IconArrowBigDown />,
            text: "5" + "%",
            mode: Mode.Destroy,
          },
          {
            icon: <IconTrendingUp />,
            text: calculatingRating(134),
            mode: Mode.Default,
          },
        ]}
      />
      <Position type="line" gap={12}>
        <Card
          className={"Profile__bank-cards"}
          title={t("app.bank.card.management.title")}
          titleWrap
          icon={<IconReload />}
          propagation={"arrow"}
          extra={
            <Position type="column" gap={12}>
              <Text text={formatCurrency(10532214)} tag="p" isCurrency />
              <PercentageVisualization
                items={[
                  { type: "salaries", value: 1242 },
                  { type: "tax", value: 412 },
                  { type: "other", value: 1234 },
                ]}
              />
            </Position>
          }
        >
          <Text
            text={t("app.bank.card.management.subtitle")}
            tag="span"
            isMuted
          />
        </Card>
        <Card
          className={"Profile__bank-cards"}
          title={t("app.bank.card.upgrades.title")}
          titleWrap
          icon={<IconReload />}
          propagation={"arrow"}
          extra={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <Tag value="Можно улучшить" isCenter mode={Mode.Progress} />
            </div>
          }
        >
          <Text
            text={t("app.bank.card.upgrades.subtitle")}
            tag="span"
            isMuted
          />
        </Card>
      </Position>
      {process.env?.IS_MVP === "0" && (
        <>
          <Card
            disable={isDisable}
            title={t("app.bank.staking.card.title")}
            propagation={"text"}
          >
            <Text text={t("app.bank.staking.card.text")} tag={"span"} isMuted />
          </Card>
          <Card
            disable={isDisable}
            title={t("app.farms.title")}
            propagation={"text"}
          >
            <Text text={t("app.farms.card.info")} tag={"span"} isMuted />
          </Card>
        </>
      )}
      <Card
        disable={isDisable}
        icon={<IconGift />}
        title={t("app.bonus.title")}
        propagation={"text"}
      >
        <Text text={t("app.bonus.info.available")} tag={"span"} isMuted />
      </Card>
      <Card
        title={t("app.currency.title")}
        icon={<IconArrowsExchange />}
        propagation={"text"}
      >
        <CurrencyExchangeRate />
      </Card>
    </>
  );
};
