import "./CurrencyExchangeRate.sass";

import { createMemo } from "solid-js";
import { useTranslation } from "hooks";

import { formatCurrency } from "utils";

import { Position, FlagIcon, Tag, Text } from "uikit";

import {
  CurrencyExchangeRateProps,
  CurrencyExchangeRateItem,
} from "./CurrencyExchangeRate.interface";
import { Currency, Mode } from "store/models";

export const CurrencyExchangeRate: CurrencyExchangeRateProps = () => {
  const t = useTranslation();

  const items = createMemo((): CurrencyExchangeRateItem[] | undefined => {
    const currency = [Currency.BYN, Currency.RUB, Currency.USD];
    return Array.from(Array(3), (_, i) => ({
      exchange: {
        buy: Math.random() * 1000,
        sell: Math.random() * 1000,
      },
      type: currency[i],
    }));
  }, []);

  return (
    <div class="CurrencyExchangeRate">
      {items()?.map((item, index, array) => {
        return (
          <>
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
                  value={formatCurrency(item.exchange.sell)}
                  mode={Mode.Destroy}
                />
                <Tag
                  value={formatCurrency(item.exchange.buy)}
                  mode={Mode.Progress}
                />
              </Position>
            </Position>
            {array.length - 1 !== index && (
              <div class="CurrencyExchangeRate__divider" />
            )}
          </>
        );
      })}
    </div>
  );
};
