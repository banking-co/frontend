import "./Profile.sass";

import { useTranslation } from "hooks";
import { calculatingRating, formatCurrency } from "utils";

import { Card, PercentageVisualization, Position, Tag, Text } from "uikit";
import { BalanceCard, CurrencyExchangeRate } from "components";

import {
  IconArrowBigDown,
  IconBonus,
  IconReload,
  IconTrendingUp,
} from "assets/icons/";

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
          { icon: <IconArrowBigDown />, text: "123,34", mode: Mode.Destroy },
          {
            icon: <IconTrendingUp />,
            text: calculatingRating(134),
            mode: Mode.Default,
          },
        ]}
      />
      <Position
        type="line"
        gap={12}
        style={{ "min-height": "157px", "max-height": "169.5px" }}
      >
        <Card
          title={t("app.bank.card.management.title")}
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
              <Tag value="Можно взять" isCenter mode={Mode.Progress} />
            </div>
          }
          style={{ height: "100%" }}
        />
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
        icon={<IconBonus />}
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
