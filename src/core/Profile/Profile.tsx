import "./Profile.sass";

import { useTranslation } from "i18nano";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import { calculatingRating, formatCurrency } from "utils";

import { Card, PercentageVisualization, Position, Tag, Text } from "uikit";
import { BalanceCard, CurrencyExchangeRate } from "components";

import {
  IconArrowBigDown,
  IconArrowsExchange,
  IconCurrencyDollar,
  IconGift,
  IconReload,
  IconTrendingUp,
} from "@tabler/icons-react";

import { Modals, Mode } from "models";
import type { ProfileProps } from "./Profile.interface";
import { useModal } from "hooks";

export const Profile: ProfileProps = () => {
  const { openModal } = useModal();
  const t = useTranslation();
  const n = useNavigate();
  const isDisable = false;

  return (
    <>
      <ScrollRestoration />
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
          title={t("bank.card.management.title")}
          titleWrap
          icon={<IconReload />}
          propagation={"arrow"}
          onClick={() => n("management")}
          extra={
            <Position type="column" gap={12}>
              <Position
                className={"Profile__bank-icons"}
                type="line"
                alignItems={"center"}
              >
                <IconCurrencyDollar size={20} />
                <Text text={formatCurrency(10532214)} tag="p" />
              </Position>
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
          <Text text={t("bank.card.management.subtitle")} tag="span" isMuted />
        </Card>
        <Card
          disable
          className={"Profile__bank-cards"}
          title={t("bank.card.upgrades.title")}
          titleWrap
          icon={<IconReload />}
          propagation={"arrow"}
          onClick={() => {}}
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
          <Text text={t("bank.card.upgrades.subtitle")} tag="span" isMuted />
        </Card>
      </Position>
      <Card
        disable={isDisable}
        icon={<IconGift />}
        title={t("bonus.title")}
        propagation={"text"}
        onClick={() => openModal(Modals.Bonus)}
      >
        <Text text={t("bonus.info.available")} tag={"span"} isMuted />
      </Card>
      <Card
        title={t("currency.title")}
        icon={<IconArrowsExchange />}
        propagation={"text"}
        onClick={() => openModal(Modals.Currency)}
      >
        <CurrencyExchangeRate />
      </Card>
    </>
  );
};
