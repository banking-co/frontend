import { useTranslation } from "i18nano";

import { Modal } from "uikit";

export const Bonus = () => {
  const t = useTranslation();

  return <Modal.Card header={t("bonus.title")}></Modal.Card>;
};
