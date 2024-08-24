import { useTranslation } from "i18nano";

import { Button, Modal, Text } from "uikit";

const CurrencyBottom = () => {
  return (
    <>
      <Button stretched mode="red">
        <Text text={"Sell"} tag={"p"} />
      </Button>
      <Button stretched mode="green">
        <Text text={"Buy"} tag={"p"} />
      </Button>
    </>
  );
};

export const Currency = () => {
  const t = useTranslation();

  return (
    <Modal.Page
      header={t("currency.title")}
      bottom={<CurrencyBottom />}
    ></Modal.Page>
  );
};
