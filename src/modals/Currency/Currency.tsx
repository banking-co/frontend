import { useTranslation } from "i18nano";

import { Modal } from "uikit";

export const Currency = () => {
  const t = useTranslation();

  return <Modal.Card header={t("currency.title")}></Modal.Card>;
};
