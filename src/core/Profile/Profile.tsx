import "./Profile.sass";

import { useTranslation } from "hooks";
import { calculatingRating } from "utils";

import { Card, Column, Line, PercentageVisualization, Tag, Text } from "uikit";
import { BalanceCard, CurrencyExchangeRate } from "components";

import { IconArrowBigDown, IconReload, IconTrendingUp } from "assets/icons/";

import { Mode } from "store/models";
import type { ProfileProps } from "./Profile.interface";

export const Profile: ProfileProps = () => {
  const t = useTranslation();
  const isDisable = false;

  return (
    <>
      <BalanceCard
        tags={[
          { icon: <IconArrowBigDown />, text: "123,34", mode: Mode.Destroy },
          {
            icon: <IconTrendingUp />,
            text: calculatingRating(134),
            mode: Mode.Default,
          },
        ]}
      />
      <Line gap={12} style={{ height: "169.5px" }}>
        <Card
          title={t("app.bank.card.management.title")}
          icon={<IconReload />}
          propagation={"arrow"}
          extra={
            <Column gap={6}>
              <Text text={`1 / 20`} tag="p" />
              <PercentageVisualization
                items={[
                  { type: "salaries", value: 1242 },
                  { type: "tax", value: 412 },
                  { type: "other", value: 1234 },
                ]}
              />
            </Column>
          }
          style={{ height: "100%" }}
        />
        <Card
          title={t("app.bank.card.contracts.title")}
          icon={<IconReload />}
          propagation={"arrow"}
          extra={
            <div
              style={{
                display: "flex",
                "flex-direction": "column",
                gap: "8px",
              }}
            >
              <Text
                text={t("app.bank.card.contracts.extra.title")}
                tag="span"
                isMuted
              />
              <Tag value="23.02.2024, 23:59" isCenter mode={Mode.Progress} />
            </div>
          }
          style={{ height: "100%" }}
        />
      </Line>
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
      <Card
        disable={isDisable}
        title={t("app.bonus.title")}
        propagation={"text"}
      >
        <Text text={t("app.bonus.info.available")} tag={"span"} isMuted />
      </Card>
      <Card title={t("app.currency.title")} propagation={"text"}>
        <CurrencyExchangeRate />
      </Card>
    </>
  );
};
