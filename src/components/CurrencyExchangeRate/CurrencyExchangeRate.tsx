import "./CurrencyExchangeRate.sass";

import { Fragment, useMemo } from "react";
import { useTranslation } from "i18nano";

import { formatCurrency } from "utils";

import { Position, FlagIcon, Tag, Text } from "uikit";

import {
  CurrencyExchangeRateProps,
  CurrencyExchangeRateItem,
} from "./CurrencyExchangeRate.interface";
import { Currency, Mode } from "models";
import { IconCurrencyDollar } from "@tabler/icons-react";

export const CurrencyExchangeRate: CurrencyExchangeRateProps = () => {
  const t = useTranslation();

  const items = useMemo((): CurrencyExchangeRateItem[] | undefined => {
    const currency = [Currency.Byn, Currency.Rub, Currency.Usd];
    return Array.from(Array(3), (_, i) => ({
      exchange: {
        buy: Math.random() * 1000,
        sell: Math.random() * 1000,
      },
      type: currency[i],
    }));
  }, []);

  return (
    <div className="CurrencyExchangeRate">
      {items?.map((item, index, array) => {
        return (
          <Fragment key={`CurrencyExchangeRate--${item.type}--${index}`}>
            <Position type="line" justifyContent="space-between">
              <Position type="column" gap={4}>
                <Position type="line" gap={8}>
                  <FlagIcon currency={item.type} />
                  <Text tag="p" text={t(`currency.${item.type}.title`)} />
                </Position>
                <Text
                  tag="span"
                  isMuted
                  text={t(`currency.${item.type}.text`)}
                />
              </Position>
              <Position type="line" gap={24}>
                <Tag
                  icon={<IconCurrencyDollar />}
                  value={formatCurrency(item.exchange.sell)}
                  mode={Mode.Destroy}
                />
                <Tag
                  icon={<IconCurrencyDollar />}
                  value={formatCurrency(item.exchange.buy)}
                  mode={Mode.Progress}
                />
              </Position>
            </Position>
            {array.length - 1 !== index && (
              <div className="CurrencyExchangeRate__divider" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
