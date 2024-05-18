import "./Fallback.sass";

import { useTranslation } from "hooks";

import type { FallbackProps } from "./Fallback.interface";
import { Placeholder, Text } from "uikit";

export const Fallback: FallbackProps = () => {
  const t = useTranslation();

  return (
    <Placeholder
      isCenter={true}
      title={t("errors.404.title")}
      text={t("errors.404.text")}
      description={t("errors.404.description")}
    />
  );
};
