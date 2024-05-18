import "./CardHeader.sass";

import { createMemo } from "solid-js";
import { useTranslation } from "hooks";

import { IconWrapper, Text } from "uikit";

import { IconChevronRight } from "assets/icons";

import { CardHeaderProps } from "./CardHeader.interface";

export const CardHeader: CardHeaderProps = (props) => {
  const t = useTranslation();

  const propagation = createMemo(() => {
    switch (props.propagation) {
      case "arrow":
        return <IconChevronRight width={20} height={20} />;
      case "text":
        return (
          <Text text={t("app.card.propagation.text")} tag={"span"} isAccent />
        );
      default:
        return;
    }
  });

  return (
    <div class="CardHeader">
      <div class="CardHeader__container">
        {props.icon && <IconWrapper>{props.icon}</IconWrapper>}
        <div class="CardHeader__title">
          <Text text={props.title} tag="p" />
        </div>
      </div>
      {propagation() && (
        <div class="CardHeader__propagation">{propagation()}</div>
      )}
    </div>
  );
};
