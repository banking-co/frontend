import { createMemo, createSignal } from "solid-js";

import { flatten, translator, resolveTemplate } from "@solid-primitives/i18n";

import { ru } from "../translations";

type Locale = "ru";

const dictionaries = {
  ru,
};

export const useTranslation = () => {
  const [locale, setLocale] = createSignal<Locale>("ru");
  const dict = createMemo(() => flatten(dictionaries[locale()]));
  return translator(dict, resolveTemplate);
};
